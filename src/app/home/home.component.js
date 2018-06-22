"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
// trigger, state, animate, style, transition, keyframes permettent de gérer les animations
var HomeComponent = (function () {
    function HomeComponent() {
        this.open = false;
    }
    HomeComponent.prototype.toggle = function () {
        this.open = !this.open;
        if (this.open) {
            this.toggleElement = 'open';
        }
        else {
            this.toggleElement = 'closed';
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        // animations accessibles via la propriété "animation" à rajouter aux métadonnées du component
        // valeur de "animations" : tableau
        animations: [
            // Déclencheur d'animation (trigger). Il peut y en avoir plusieurs.
            // 1er argument: nom du trigger. 2ème argument: tableau d'états
            animations_1.trigger('toggleElement', [
                // Etat: nom de l'état, propriété syle avec objet des styles (couple clé-valeur)
                animations_1.state('open', animations_1.style({ height: '*' })),
                animations_1.state('closed', animations_1.style({ 'height': '0px', 'font-size': '0px' })),
                // On peut écrire: style({ height: 0, fontSize: 0 })
                animations_1.transition('closed <=> open', [
                    animations_1.animate(1000) // Transition s'opère en 1s
                ])
            ])
        ],
        selector: 'home',
        templateUrl: 'home.component.html'
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map