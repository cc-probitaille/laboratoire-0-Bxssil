"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.De = void 0;
class De {
    // classe inspirée de la classe conceptuelle (du MDD)
    _valeur;
    constructor() {
        this.brasser();
    }
    brasser() {
        this._valeur = Math.floor(Math.random() * 6 + 1);
    }
    get valeur() {
        return this._valeur;
    }
}
exports.De = De;
//# sourceMappingURL=de.js.map