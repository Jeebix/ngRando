import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour les directives ngFor, ngIf, ...
import { FormsModule } from '@angular/forms'; // Pour directive ngModel
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

import { MapComponent } from './map.component';
import { MapContentComponent } from './map-content.component';
import { MapService } from './map.service';

@NgModule({
	imports: [
	    CommonModule,
	    AgmCoreModule.forRoot({ // Méthode statique "forRoot"
	      	apiKey: 'AIzaSyBXnCAqs2W4nU_PvAMQ12nr_1WW6SZlsxI'
	    }),
	    RouterModule.forChild([
	    	{ path: 'map', component: MapComponent }
	    ]),
	    FormsModule
  	],
	  providers: [ MapService ],
	  declarations: [ MapComponent, MapContentComponent ]
})

export class MapModule {}