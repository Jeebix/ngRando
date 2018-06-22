import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
// trigger, state, animate, style, transition, keyframes permettent de gérer les animations

@Component({
	moduleId: module.id,
	// animations accessibles via la propriété "animation" à rajouter aux métadonnées du component
	// valeur de "animations" : tableau
	animations: [
		// Déclencheur d'animation (trigger). Il peut y en avoir plusieurs.
		// 1er argument: nom du trigger. 2ème argument: tableau d'états
		trigger('toggleElement', [
			// Etat: nom de l'état, propriété syle avec objet des styles (couple clé-valeur)
			state('open', style({ 'height': '*' })), // 1er état
			state('closed', style({ 'height': '0px', 'font-size': '0px' })), // 2ème état
						    // On peut écrire: style({ height: 0, fontSize: 0 })

			transition('closed <=> open', [ // On gère le passage de open à closed et inversement
				animate('500ms ease-out') // Transition s'opère en 1s après avoir attendu 2s
			])
		]),

		trigger('animateCitation', [
			transition('stateA <=> stateB', [
				animate(600, keyframes([
					style({ opacity: .5, offset: 0 }),
					style({ opacity: 1, color: '#fcb514', offset: .5 }),
					style({ opacity: .7, offset: .7 }),
					style({ opacity: 1, offset: 1 })
					// offset permet de gérer l'animation dans le temps (0.5 => 300)
				]))
			])
		])
	],
	// selector: 'home',
	templateUrl: 'home.component.html',
	styles: [
		`
			.frames { margin-bottom: 10px; padding: 10px; border: 5px solid #eee; height: 170px; }
			.citation { font-size: 20px; color: #3268ba; }
		`
	]
})

export class HomeComponent {
	
	open: boolean = false; // Flag
	toggleElement: string = "closed"; // Etat initialisée à "closed"

	animateCitation: string = "stateB";
	flag: boolean = false;
	index: number = 0;

	quotes: quote[] = [
		{
            id: 0, 
            text:"En vérité, je ne voyage pas, moi, pour atteindre un endroit précis, mais pour marcher : simple plaisir de voyager. ",
            author: 'Robert Louis Stevenson'
        },
        {
            id: 1, 
            text:"Mon pied droit est jaloux de mon pied gauche. Quand l'un avance, l'autre veut le dépasser. Et moi, comme un imbécile, je marche ! ",
            author: "Raymond Devos"
        },
        {
            id: 2, 
            text:"Le plus long de tous les voyages commence par un tout petit pas",
            author: "proverbe chinois"
        }
	]

	quote: quote = this.quotes[0]; // Initialisation de la quote à afficher

	getPreviousQuote() {
		this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
		this.getSomeQuote(-1);
	}

	getNextQuote() {
		this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
		this.getSomeQuote(1);
	}

	getSomeQuote(increment: number) {
		this.index = this.index + increment;

		if ( this.index >= this.quotes.length && increment === 1 )
		{
			this.index = 0;
		}

		if ( this.index < 0 && increment === -1 )
		{
			this.index = this.quotes.length - 1;
		}

		this.quote = this.quotes[this.index];
	}

	log(event: any) {
		console.log(event);
	}

	toggle() {
		this.open = !this.open;
		// console.log(this.open);
		if ( this.open )
		{
			this.toggleElement = 'open';
		}
		else
		{
			this.toggleElement = 'closed';
		}		
	}
}

interface quote {
	id: number;
	text: string;
	author: string;
}