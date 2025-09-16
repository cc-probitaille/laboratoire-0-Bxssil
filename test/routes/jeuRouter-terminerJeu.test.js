"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
require("jest-extended");
const app_1 = __importDefault(require("../../src/app"));
const request = (0, supertest_1.default)(app_1.default);
const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';
beforeAll(async () => {
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
});
describe('GET /api/v1/jeu/terminerJeu/:id', () => {
    it(`devrait répondre avec une mauvaise demande lorsque le joueur n'existe pas ${testNom2}`, async () => {
        const response = await request.get('/api/v1/jeu/terminerJeu/' + testNom2);
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body.error).toInclude("n'existe pas");
        expect(response.body.error).toInclude(testNom2);
    });
    it(`devrait répondre avec un appel réussi pour le joueur ${testNom1}`, async () => {
        const response = await request.get('/api/v1/jeu/terminerJeu/' + testNom1);
        const resultat = JSON.parse(response.body.resultat);
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(resultat.nom).toBe(testNom1);
    });
});
//# sourceMappingURL=jeuRouter-terminerJeu.test.js.map