"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hike_service_1 = require("./hike.service");
var HikeListComponent = (function () {
    /* Private est un raccourci (accesseur) qui permet de ne pas déclarer la variable avant
       et de l'initialiser ensuite dans le constructeur avec this */
    function HikeListComponent(_hikeService) {
        this._hikeService = _hikeService;
        /* Pas d'appel à un service dans un constructeur. Le constructeur sert à créer un nouvel objet
        et à définir son état en initialisant des variables représentant cet état à l'aide de variables
        éventuellement passées en paramètre du constructeur. */
    }
    HikeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.hikes = this._hikeService.getHikes();
        this._hikeService.getHikesFromAPI()
            .subscribe(function (res) { return _this.hikes = res; }, // Arrow fonction (nouveauté ECMAscript 2015)
        function (// Arrow fonction (nouveauté ECMAscript 2015)
            err) { return console.error(err.status); });
        // 3 fonctions callback pour "l'abonnement" à l'observable: succeed, error, complete
        console.log(this.hikes);
    };
    HikeListComponent.prototype.addToMyTodoHike = function (hikeToAdd) {
        console.log("rando " + hikeToAdd.name + " ajout\u00E9e"); // template intégré dans string grâce au raccourci `...`
    };
    return HikeListComponent;
}());
HikeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hike-list',
        templateUrl: 'hike-list.component.html'
    }),
    __metadata("design:paramtypes", [hike_service_1.HikeService])
], HikeListComponent);
exports.HikeListComponent = HikeListComponent;
/* Avec l'injection de dépendance, ce sont les injecteurs fournis par Angular qui nous fournissent l'instance
d'un objet simplement en indiquant au constructeur de notre classe utilisatrice (celle qui souhaite utiliser
des méthodes de cet objet), le type de l'objet dont nous avons besoin.

Avec l'injection de dépendance, nous ne faisons plus de "new", nous indiquons seulement le type attendu.
C'est à l'injecteur de nous fournir un objet de ce type. */ 
//# sourceMappingURL=hike-list.component.js.map