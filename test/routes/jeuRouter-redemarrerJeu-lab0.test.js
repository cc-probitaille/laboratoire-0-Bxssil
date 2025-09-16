"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Vous devez insérer les nouveaux tests ici
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
describe('GET /api/v1/jeu/redemarrerJeu', () => {
    let joueur1;
    let joueur2;
    beforeAll(async () => {
        // Créer deux joueurs avant les tests
        joueur1 = await (0, supertest_1.default)(app_1.default).post('/api/v1/jeu/ajouterJoueur').send({ nom: 'Joueur1' });
        joueur2 = await (0, supertest_1.default)(app_1.default).post('/api/v1/jeu/ajouterJoueur').send({ nom: 'Joueur2' });
    });
    it('devrait réussir à redémarrer le jeu (code HTTP 200 et réponse JSON)', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/api/v1/jeu/redemarrerJeu');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    });
    it('devrait valider que tous les joueurs ont été supprimés après le redémarrage', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/api/v1/jeu/joueurs');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });
});
//# sourceMappingURL=jeuRouter-redemarrerJeu-lab0.test.js.map