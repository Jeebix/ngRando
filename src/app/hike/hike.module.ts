import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeFilterPipe } from './hike-filter.pipe';
import { HikeSummaryComponent } from './hike-summary.component';
 
@NgModule({ // Décorateur = fonction avec objet de configuration
	imports: [ CommonModule,
			   HttpModule,
			   FormsModule,
			   RouterModule.forChild([
			   		{ path: 'hikes', component: HikeListComponent },
			   		{ path: 'hikes/:id', component: HikeDetailsComponent }
			   ])
	], // import d'autres modules (commonModule contient directives utiles)
	declarations: [ HikeListComponent,
					HikeDetailsComponent,
					HikeFilterPipe,
					HikeSummaryComponent
	],// Tableau qui déclare tous les components + pipes
	exports: [ HikeListComponent ], /* Tableau d'export des components pour qu'ils soient réutilisés
								     par un module qui utiliserait le module spécifié */
	providers: [ HikeService ] // Pour déclarer des services
})

export class HikeModule {}