import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; /* ActivatedRoute est un service
												  qui permet de passer des paramètres via l'url */
import { HikeService } from './hike.service';
import { Hike } from './hike';

@Component({
	moduleId: module.id,
	templateUrl: 'hike-details.component.html'
})

export class HikeDetailsComponent implements OnInit { // On implémente l'interface OnInit
													  // => "contrat": on doit utiliser les méthodes de l'interface (ici, ngOnInit)
	title: string;
	hike: Hike;

	// Pour injecter un service, pensez à expliciter un constructeur
	constructor(private _route: ActivatedRoute, private _router: Router, private _hikeService: HikeService) { // 
	}

	ngOnInit() {
		// '+' is used to cast the string to a number
		let id = +this._route.snapshot.params['id']; // Variable avec "l'instantané" paramètre "id"
		this.title = `Détails de la randonnée ${id}`; // `` raccourci de concaténation d'ECMAscript 2016 avec ${variable} (template)
		this.hike = this._hikeService.getHikeById(id);
	}

	goBack() {
		this._router.navigate(['/hikes']);
	}
}