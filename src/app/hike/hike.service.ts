import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // Pour pouvoir utiliser l'observable "get"

import { Hike } from './hike';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'; // Pour importer opérateur "map" que nous fourni Rx.js (parmi des dizaines)
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import {Observable} from 'rxjs/Rx';

@Injectable() // Décorateur qui permet d'injecter qqchose comme des requêtes ajax
/* Par convention, on décore un service à l'aide de @Injectable, même si on n'injecte
rien dans le constructeur de notre sevice */
export class HikeService {

 	hikes: Hike;

	private data: any;
	private observable: Observable<any>;
	private url: string = 'app/assets/api/hikes.json';

	BASE_URL = 'http://localhost:4200/assets';

	constructor(private _http: Http) {

	}

	getHikes() {
		return this.hikes;
	}

	getHikesFromAPIwithCache() {
		// 1- propriété qui servira de cache
		// 2- les données sont-elles déjà en cache ?
		// 3- oui en cache, retourner les données sous forme d'observable
		// 4- non pas en cache, une requête est-elle en cours ?
		// 5- si pas de données en cache et pas de requête en cours, requête au service web

		if ( this.data )
		{
			return Observable.of(this.data);
		}
		else if ( this.observable )
		{
			return this.observable;
		}
		else
		{
			this.observable = this._http
				.get(`${this.BASE_URL}/api/hikes.json`)
				.map(response => {
					this.observable = null;
					this.data = response.json();
					return this.data;
				})
				.catch(error => {
					let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
					return Observable.throw(errorMessage);
				});

			return this.observable; 
		}
	}

	getHikeById(id: any) {
		if ( !this.data )
		{
			return undefined;
		}
		
		const result = this.data.filter((hike: any) => hike.id === id);
		if ( result.length > 0 )
		{
			console.log(result);
			return result[0];
		}
	}

	getHikesFromAPI() {
		return this._http.get('assets/api/hikes.json')
				.do(x => console.log(x)) // "do" permet d'observer l'observable (déboguage)
				.map(hikes => hikes.json()) // "map" retourne un observable en fichier .json
				.catch(error => {
	                let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
	                return Observable.throw(errorMessage);
	            });
	}
	// L'observable renvoie un autre observable avec "map" que l'on utilise en l'important depuis RxJs

	// Un observable sert à envoyer des données de manière asynchrone
}

// Les flux de données changent au cours du temps et les observables permettent "d'observer" ce flux
// grâce à des observer, objets qui ont 3 méthodes: .next(), .error() et .complete().
// L'observable "pousse" des données, donc il push un observer.next() qui est une donnée.
// 1 observable fait du push vers un observer.
// 1 observer s'abonne à un observable afin de pouvoir recevoir 3 types de données: données, erreurs, complété.
// La méthode .subscribe() fait le lien entre observable et observer.
// L'observer contient les méthodes (la logique) permettant de réagir aux données poussées par l'observable.
// 1 observable pousse des données au fil du temps (ne fournit aucune données tant qu'un observer n'est pas abonné),
// alors qu'une promesse envoie une données dès qu'elle est créée.
