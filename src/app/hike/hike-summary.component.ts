import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// Pour @Output, importer EventEmitter qui permet d'émettre un évenement vers le parent

import { Hike } from './hike';

@Component({
	moduleId: module.id,
	selector: "hike-summary",
	templateUrl: "hike-summary.component.html",
	   // Pour changer le style d'un component (si peu de styles à modifier)
	styles: ['a { text-decoration: none } a:hover { color: #999 }'],
	   // Sinon "styleUrl" fait pointer vers un fichier css
	// styleUrls: ['hike-summary.component.css']
	encapsulation: ViewEncapsulation.Emulated

})

export class HikeSummaryComponent {
	
	@Input() hike: Hike;
	// On insère un input parameter
	
	@Output() togglehikeasfavorite = new EventEmitter<Hike>(); // Générique de type Hike
	// Output parameter avec un évènement que l'on envoie vers le parent

	toggleAsTodoHike(isAdded: any) {
		console.log(isAdded);
		if (isAdded)
		{
			this.hike.dateAddedAsTodo = Date.now();
            this.togglehikeasfavorite.emit(this.hike);
			// Si on click pour ajouter, on émet la randonnée associée vers le component parent
		}
		else
		{
			delete this.hike.dateAddedAsTodo;
            this.togglehikeasfavorite.emit(this.hike);
		}
	}

}