// Vous devez insérer les nouveaux tests ici
import request from 'supertest';
import app from '../../src/app';

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  let joueur1: any;
  let joueur2: any;

  beforeAll(async () => {
    // Créer deux joueurs avant les tests
    joueur1 = await request(app).post('/api/v1/jeu/ajouterJoueur').send({ nom: 'Joueur1' });
    joueur2 = await request(app).post('/api/v1/jeu/ajouterJoueur').send({ nom: 'Joueur2' });
  });

  it('devrait réussir à redémarrer le jeu (code HTTP 200 et réponse JSON)', async () => {
    const response = await request(app).get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('devrait valider que tous les joueurs ont été supprimés après le redémarrage', async () => {
    const response = await request(app).get('/api/v1/jeu/joueurs');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('devrait renvoyer 404 si on joue après avoir redémarré le jeu', async () => {
    const response = await request(app).get('/api/v1/jeu/jouer/Joueur1');
    expect(response.status).toBe(404);
    expect(response.body.error).toContain("n'existe pas");
    expect(response.body.error).toContain("Joueur1");
  });

});

