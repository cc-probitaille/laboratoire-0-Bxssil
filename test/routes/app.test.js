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
describe('baseRoute', () => {
    it('devrait avoir un contenu HTML', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.type).toBe("text/html");
    });
});
describe('/stats', () => {
    it('devrait avoir un contenu HTML', async () => {
        const response = await request.get('/stats');
        expect(response.status).toBe(200);
        expect(response.type).toBe("text/html");
    });
});
describe('/signin (déjà connecté)', () => {
    it('devrait avoir un contenu HTML', async () => {
        const response = await request.get('/signin');
        expect(response.status).toBe(302);
        expect(response.text).toBe("Found. Redirecting to /");
    });
});
describe('/signout', () => {
    it('devrait avoir un contenu HTML', async () => {
        const response = await request.get('/signout');
        expect(response.status).toBe(302);
        expect(response.text).toBe("Found. Redirecting to /");
    });
});
describe('/signin (déconnecté)', () => {
    it('devrait avoir un contenu HTML', async () => {
        const response = await request.get('/signin');
        expect(response.status).toBe(200);
        expect(response.type).toBe("text/html");
    });
});
describe('GET /bo/gu/s/URL/', () => {
    it(`devrait répondre avec une mauvaise demande lorsque l'URL est mauvais`, async () => {
        const response = await request.get('/bo/gu/s/URL/' + testNom1);
        expect(response.status).toBe(404);
    });
});
//# sourceMappingURL=app.test.js.map