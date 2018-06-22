import { Component, OnInit } from '@angular/core';

import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;

@Component({
    selector: 'map-content',
    template: ''
})

export class MapContentComponent implements OnInit {

    constructor(public _mapApiWrapper: GoogleMapsAPIWrapper) {

    }

    ngOnInit() {
        this._mapApiWrapper.getNativeMap()
            .then((map)=> {        
                let position = new google.maps.LatLng(48.30725, -1.43307);

                var circle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#00FF00',
                    fillOpacity: 0.35,
                    map: map,
                    center: position,
                    radius: 5000
                });
            });
    }
}