import supertest from 'supertest';
import { assert } from 'console';
import 'jest-extended';
import app from '../../src/app';
import { jeuRoutes } from "../../src/routes/jeuRouter";

const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

beforeAll(async () => {
  await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
  await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });
});

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  it("Redémarrer jeu", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it("Il n'y a plus de joueur", async () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  });

  it('devrait contenir un test pour jouer qui retorune 404 (après redemarrerJeu()', async () => {
    const response = await request.get('/api/v1/jeu/jouer/');
    expect(response.status).toBe(404);
  });
});