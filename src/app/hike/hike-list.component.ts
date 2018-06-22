import { Component, OnInit, trigger, animate, style, transition } from '@angular/core';

import { Hike } from './hike';
import { HikeService } from './hike.service';
import { HikeSummaryComponent } from './hike-summary.component';

@Component({
	moduleId: module.id, // Dispense de mettre chemin complet depuis index.html
	// selector: 'hike-list', Peut utiliser préfixe pour éviter collision de noms (cc-hike-list)
	templateUrl: 'hike-list.component.html',
	styles: ['ul {  list-style-type: none; padding: 0; margin: 0}'],
    animations: [
        trigger('onHikesDisplay', [
            transition('void => *', [ 
                                        style({transform: 'translateY(-25%)'}), 
                                        animate(250) 
                                    ]
                      )
        ])
    ]
})

export class HikeListComponent {

	hikes: Hike[];
	searchTerm: string;
	errorMessage: string = "";
			 
			 /* Private est un raccourci (accesseur) qui permet de ne pas déclarer la variable avant
				et de l'initialiser ensuite dans le constructeur avec this */
	constructor(private _hikeService: HikeService) {
		/* Pas d'appel à un service dans un constructeur. Le constructeur sert à créer un nouvel objet
		et à définir son état en initialisant des variables représentant cet état à l'aide de variables
		éventuellement passées en paramètre du constructeur. */
	}

	ngOnInit() {
		// this.hikes = this._hikeService.getHikes();
		// console.log(this.hikes);
		this._hikeService.getHikesFromAPIwithCache()
							// S'abonner à l'observable pour qu'il retourne des informations
							.subscribe(
								res => this.hikes = res, // Arrow fonction (nouveauté ECMAscript 2015)
								err => this.errorMessage = err
							);
							// 3 fonctions callback pour "l'abonnement" à l'observable: succeed, error, complete
	}

	toggleToMyTodoHikes(hikeToAdd: Hike) {
        console.log(`Hike ${hikeToAdd.name} added on ${hikeToAdd.dateAddedAsTodo}`);
        console.log(JSON.stringify(hikeToAdd));
        // template intégré dans string grâce au raccourci `...`
    }
}

/* Avec l'injection de dépendance, ce sont les injecteurs fournis par Angular qui nous fournissent l'instance
d'un objet simplement en indiquant au constructeur de notre classe utilisatrice (celle qui souhaite utiliser
des méthodes de cet objet), le type de l'objet dont nous avons besoin.

Avec l'injection de dépendance, nous ne faisons plus de "new", nous indiquons seulement le type attendu.
C'est à l'injecteur de nous fournir un objet de ce type. */