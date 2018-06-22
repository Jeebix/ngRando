import { Component, OnInit, ApplicationRef } from '@angular/core';
// ApplicationRef est un objet qui dispose d'une méthode tick()

import { AgmPolyline } from '@agm/core/directives'

import { MapService } from './map.service';

declare var google: any;

@Component({
	moduleId: module.id,
	selector: 'hike-map',
	templateUrl: 'map.component.html',
	styleUrls: [ 'map.component.css' ]
})

export class MapComponent implements OnInit {
	
	// Mézières-sur-Couesnon
	lat: number = 48.30725;
    lng: number =  -1.43307;
    icon: string = "assets/images/greenmarker.png";

	droppedLat: number;
	droppedLng: number;
	markerWasDropped: boolean = false;
	
	startingPoint: string = "La ville Ollivier, 35140 Mézières-sur-Couesnon, France";
	markerTitle: string = "déplacer le marqueur pour récupérer des coordonnées";
	// strokeColor: string = "red";
	
	markers: marker[] = [];
	markersFromCoords: marker[] = [];
	
	pointsForPolyline: coord[] = [];

	constructor(private _mapService: MapService, private _applicationRef: ApplicationRef) {
		// On injecte le service via le constructeur
		console.log('MapComponent ctor');
	}

	ngOnInit() {    
        // this.initMarkerByCoords();        
    }

    ngAfterViewInit() {
    }


	geocode() {
		// Méthode geocode() retourne un observable donc on peut s'abonner
		this._mapService
			.getLatLng(this.startingPoint)
			.subscribe(
				(data: any) => this.placeMarkerOnGeocodedPlace(data),
				(err: any) => console.error(err)
			);
	}

	resetStartingPoint() {
		this.pointsForPolyline = [];
		this.startingPoint = "";
	}

	placeMarkerOnGeocodedPlace(location: any) {
		let marker = {
			lat: parseFloat(location.geometry.location.lat()), // Info de l'API
			lng: parseFloat(location.geometry.location.lng()), // Info de l'API
			title: location.formatted_address,
			icon: "assets/images/yellowmarker.png",
			draggable: true
		}; 

		// Pour commencer à tracer la randonnée dès le premier marker "localisé"
		if ( this.pointsForPolyline.length === 0 )
		{
			this.pointsForPolyline.push({ lat: marker.lat, lng: marker.lng });
		}

		// this.markers.push(marker);
		this.markers  = [ ...this.markers, marker];
		console.log(this.markers);
		this._applicationRef.tick(); // Permet de rafraîchir plus vite
	}
	
	updatePolyline(event: any) { // event en argument car évènement côté template
		let droppedLatForPolyline = parseFloat(event.coords.lat);
		let droppedLngForPolyline = parseFloat(event.coords.lng);
		this.pointsForPolyline.push({ lat: droppedLatForPolyline, lng: droppedLngForPolyline });
	}

	onCoordMarkerDropped(event: any) {
		console.log(event);
		this.markerWasDropped = true;
		this.droppedLat = event.coords.lat.toFixed(5);
		// toFixed = méthode Javascript qui spécifie le nombre de chiffres après la virgule
		this.droppedLng = event.coords.lng.toFixed(5);
	}


	addMarkerByCoords(formValue: any) {
		let marker = { lat: 0, lng: 0, draggable: false, icon: "", title: "" };
		marker.lat = parseFloat(formValue.markerByCoordsLat);
		marker.lng = parseFloat(formValue.markerByCoordsLng); // parseFloat() change string en décimal
															  // (car value récupérée du form est string)
		marker.draggable = false;
        marker.title = "";
		marker.icon = "assets/images/greenmarker.png";
		this.markersFromCoords.push(marker);

	}

	initMarkerByCoords() {
        this.markersFromCoords = this.markersFromCoords.concat([
            { lat: 48.390394, lng: -4.486076, draggable: false, title: "Brest", icon: "assets/images/greenmarker.png" },
            { lat: 48.649337, lng: -2.025674, draggable: false, title: "Saint Malo", icon: "assets/images/greenmarker.png" },
            { lat: 48.006110, lng: 0.199556, draggable: false, title: "Le Mans", icon: "assets/images/greenmarker.png" }
        ]);
    }
}

// Interface pour indiquer quelles propriétés doivent être indiquées
// Pas de méthode donc pas besoin de créer une class
interface marker {
	lat: number;
	lng: number;
	title?: string; // ? veut dire pas obligatoire
	icon?: string;
	draggable: boolean;
}

interface coord {
	lat: number;
	lng: number;
}