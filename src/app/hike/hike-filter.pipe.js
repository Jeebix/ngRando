"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// Décorateur est une fonction qui se configure avec un objet
var HikeFilterPipe = (function () {
    function HikeFilterPipe() {
    }
    HikeFilterPipe.prototype.transform = function (value, searchTerm) {
        if (searchTerm === void 0) { searchTerm = ''; }
        if (searchTerm !== '') {
            var result = value.filter(function (hike) { return hike.description.toLowerCase().includes(searchTerm) || hike.name.toLowerCase().includes(searchTerm); });
            // On obtiens un tableau qui contient uniquement les descriptions + titres qui contiennent "searchTerm"
            return result;
        }
        else {
            return value;
        }
    };
    return HikeFilterPipe;
}());
HikeFilterPipe = __decorate([
    core_1.Pipe({
        name: 'hikeFilter'
    })
], HikeFilterPipe);
exports.HikeFilterPipe = HikeFilterPipe;
//# sourceMappingURL=hike-filter.pipe.js.map