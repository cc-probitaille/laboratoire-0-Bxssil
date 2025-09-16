"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
require("jest-extended");
const app_1 = __importDefault(require("../../src/app"));
const jeuRouter_1 = require("../../src/routes/jeuRouter");
const request = (0, supertest_1.default)(app_1.default);
const testNom1 = 'Jean-Marc-in-getJoueurs';
const testNom2 = 'Pierre-in-getJoueurs';
describe('contrôleur getJoueurs()', () => {
    it('devrait rendre 0 pour le nombre de Joueurs', async () => {
        const joueursJSON = jeuRouter_1.jeuRoutes.controleurJeu.joueurs;
        const joueursArray = JSON.parse(joueursJSON);
        expect(joueursArray.length).toBe(0);
    });
    it(`devrait rendre 1 pour le nombre de Joueurs après un nouveau joueur ${testNom1} a été ajouté.`, async () => {
        const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
        expect(response.statusCode).toBe(201);
        const joueursJSON = jeuRouter_1.jeuRoutes.controleurJeu.joueurs;
        const joueursArray = JSON.parse(joueursJSON);
        expect(joueursArray.length).toBe(1);
        expect(joueursArray[0].nom).toBe(testNom1);
    });
    it(`devrait rendre 2 pour le nombre de Joueurs après un nouveau joueur ${testNom2} a été ajouté.`, async () => {
        const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });
        expect(response.statusCode).toBe(201);
        const joueursJSON = jeuRouter_1.jeuRoutes.controleurJeu.joueurs;
        const joueursArray = JSON.parse(joueursJSON);
        expect(joueursArray.length).toBe(2);
        expect(joueursArray[0].nom).toBe(testNom1);
        expect(joueursArray[1].nom).toBe(testNom2);
    });
});
//# sourceMappingURL=jeuRouter-getJoueurs.test.js.map