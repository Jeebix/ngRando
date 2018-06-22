import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from './contact.service';

@Component({
	// On crée un selector si on insère ce template dans le template d'un component parent
	// Ici, tous les components sont activés via le routage
	// On peut quand même utiliser systématiquement la propriété "selector" dans tous les components
	moduleId: module.id,
	templateUrl: 'contact-us.component.html'
})

export class ContactUsComponent {
	subject: string;
	content: string;
	service: string;
	// isVisible: boolean = true;

	constructor(private _contactService: ContactService) {}

	sendMessage(form: NgForm) {
		console.log(form.value);
		this._contactService.postContactForm(form.value);
	}
	// Pour gérer les données en POST par ex, ajouter un service (l'ajouter aussi au niveau du module)
}