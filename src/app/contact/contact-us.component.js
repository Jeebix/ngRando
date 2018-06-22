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
var contact_service_1 = require("./contact.service");
var ContactUsComponent = (function () {
    function ContactUsComponent(_contactService) {
        this._contactService = _contactService;
        this.isVisible = true;
    }
    ContactUsComponent.prototype.sendMessage = function (form) {
        this._contactService.postContactForm(form.value);
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    core_1.Component({
        // On crée un selector si on insère ce template dans le template d'un component parent
        // Ici, tous les components sont activés via le routage
        // On peut quand même utiliser systématiquement la propriété "selector" dans tous les components
        moduleId: module.id,
        templateUrl: 'contact-us.component.html'
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactUsComponent);
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contact-us.component.js.map