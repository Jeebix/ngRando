import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

declare var google: any;

@Injectable()

export class MapService {

	constructor() {
	}
	
	getLatLng(address: string) {
		let geocoder = new google.maps.Geocoder(); // Pour utiliser fonction geocoder

		// On crée un observable avec la méthode Observable.create() : permet plus d'actions
		// 'observer' est un objet qui contient 3 fonctions (next, error, completed)
		// Penser au "return" pour retourner l'observable
		return Observable.create((observer: any) => {
			geocoder.geocode({ 'address': address }, function(results: any, status: any) { // Fct callback
				if ( status === google.maps.GeocoderStatus.OK )
				{
					console.log(results[0]);
					observer.next(results[0]); // 'next' permet d'envoyer le résultat
					observer.complete();
				}
				else
				{
					console.error('erreur :', results, ' - status : ', status);
					observer.next({}); // Peut passer un objet vide
					observer.complete();
				}
			});
		}); 
	}
}