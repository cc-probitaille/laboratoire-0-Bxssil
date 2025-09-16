"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
const invalidParameterError_1 = require("./errors/invalidParameterError");
class Joueur {
    // classe inspirée de la classe conceptuelle (du MDD)
    _nom;
    _nbLancers;
    _nbLancersGagnes;
    constructor(nom) {
        this._nom = this.assainirNom(nom);
        this._nbLancers = 0;
        this._nbLancersGagnes = 0;
    }
    get nom() {
        return this._nom;
    }
    /**
     * Assainir (sanitize) le nom.
     * Il serait préférable d'avoir un mutateur privé, mais TypeScript n'aime pas ça
     * @param nom Le nom à assainir
     * @return Le nom, sans espaces blancs au début ou à la fin
     */
    assainirNom(nom) {
        nom = nom.trim();
        if (nom.length == 0) {
            throw new invalidParameterError_1.InvalidParameterError('Le nom ne peut pas être vide');
        }
        return nom;
    }
    get lancers() {
        return this._nbLancers;
    }
    get lancersGagnes() {
        return this._nbLancersGagnes;
    }
    lancer() {
        this._nbLancers++;
    }
    gagner() {
        this._nbLancersGagnes++;
    }
    toJSON() {
        return {
            nom: this.nom,
            lancers: this.lancers,
            lancersGagnes: this.lancersGagnes
        };
    }
}
exports.Joueur = Joueur;
//# sourceMappingURL=joueur.js.map