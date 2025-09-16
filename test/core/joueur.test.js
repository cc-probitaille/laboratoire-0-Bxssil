"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const invalidParameterError_1 = require("../../src/core/errors/invalidParameterError");
const joueur_1 = require("../../src/core/joueur");
let joueur1 = new joueur_1.Joueur('yvan');
describe('Joueur test', () => {
    it('devrait initialiser un joueur avec un nom', () => {
        const joueur = new joueur_1.Joueur('yvan');
        expect(joueur.nom).toEqual('yvan');
    });
    it('devrait lancer une exception si le nom est vide', () => {
        const n = () => {
            new joueur_1.Joueur('');
        };
        expect(n).toThrow(invalidParameterError_1.InvalidParameterError);
        expect(n).toThrow("Le nom ne peut pas être vide");
    });
    it('devrait assainir un nom', () => {
        const joueur = new joueur_1.Joueur('yvan    ');
        expect(joueur.nom).toEqual('yvan');
    });
    it('devrait retourner 0 pour le nombre de lancers au début', () => {
        expect(joueur1.lancers).toEqual(0);
    });
    it('devrait incrémenter le nombre de lancers', () => {
        joueur1.lancer();
        expect(joueur1.lancers).toEqual(1);
        joueur1.lancer();
        expect(joueur1.lancers).toEqual(2);
    });
    it('devrait retourner 0 pour le nombre de lancersGagnes au début', () => {
        expect(joueur1.lancersGagnes).toEqual(0);
    });
    it('devrait incrémenter le nombre de lancersGagnes', () => {
        joueur1.gagner();
        expect(joueur1.lancersGagnes).toEqual(1);
        joueur1.gagner();
        expect(joueur1.lancersGagnes).toEqual(2);
    });
    it('devrait retourner un bon JSON', () => {
        const joueur = new joueur_1.Joueur('yvan');
        expect(joueur.toJSON()).toEqual({ "lancers": 0, "lancersGagnes": 0, "nom": "yvan" });
    });
});
//# sourceMappingURL=joueur.test.js.map