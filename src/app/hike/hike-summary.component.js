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
// Pour @Output, importer EventEmitter qui permet d'émettre un évenement vers le parent
var hike_1 = require("./hike");
var HikeSummaryComponent = (function () {
    function HikeSummaryComponent() {
        // On insère un input parameter
        this.addhikeasfavorite = new core_1.EventEmitter(); // Générique de type Hike
    }
    // Output parameter avec un évènement que l'on envoie vers le parent
    HikeSummaryComponent.prototype.toggleAsTodoHike = function (isAdded) {
        console.log(isAdded);
        if (isAdded) {
            this.addhikeasfavorite.emit(this.hk);
        }
    };
    return HikeSummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hike_1.Hike)
], HikeSummaryComponent.prototype, "hk", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HikeSummaryComponent.prototype, "addhikeasfavorite", void 0);
HikeSummaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "hike-summary",
        templateUrl: "hike-summary.component.html",
        // Pour changer le style d'un component (si peu de styles à modifier)
        // styles: ['a { text-decoration: none } a:hover { color: #999 }']
        // Sinon "styleUrl" fait pointer vers un fichier css
        styleUrls: ['hike-summary.component.css']
    })
], HikeSummaryComponent);
exports.HikeSummaryComponent = HikeSummaryComponent;
//# sourceMappingURL=hike-summary.component.js.map