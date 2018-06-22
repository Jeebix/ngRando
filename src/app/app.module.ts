import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Pour éxécuter appli sur navigateur
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ContactModule } from './contact/contact.module';
import { MapModule } from './map/map.module';
// import { HomeComponent } from './home/home.component';
// import { HikeListComponent } from './hike/hike-list.component';
// import { HikeDetailsComponent } from './hike/hike-details.component';
// import { ContactUsComponent } from './contact/contact-us.component';
// import { MapComponent } from './map/map.component';

@NgModule({
    imports: [
		BrowserModule,
		BrowserAnimationsModule,
        HikeModule,
        // HttpClientModule,
        // HttpModule,
        HomeModule,
        ContactModule,
        MapModule,
        // RouterModule.forRoot([ // Méthode pour implémenter routage avec objet
        // 		// 2 éléments: le chemin et le component à activer
        // 		{ path: 'home', component: HomeComponent }, // Route 'home' active le component 'HomeComponent'
        // 		{ path: 'hikes', component: HikeListComponent },
        // 		{ path: 'hikes/:id', component: HikeDetailsComponent }, // Chemin avec paramètre (avec :)
        // 		{ path: 'contact', component: ContactUsComponent }, // Ajout de la route pour le component "contact"
        //         { path: 'map', component: MapComponent },
        // 		{ path: '', redirectTo: 'home', pathMatch: 'full' }, // Au cas où chemin dans url vide
        // 		{ path: '**', component: PageNotFoundComponent } // ** tous les autres cas (n'importe quoi dans url, ...)
        // ])
        // Ordre des routes important: mettre routes spécialisées en premier (parcours les routes dans l'ordre)
        RouterModule.forRoot([            
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
    ]) 
	],
    declarations: [ AppComponent, PageNotFoundComponent ],
    bootstrap:    [ AppComponent ] // On bootstrap uniquement sur le module sur lequel on démarre
})

export class AppModule { }
