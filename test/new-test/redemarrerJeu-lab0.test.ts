import request from 'supertest';
import app from '../../src/app'; // ajuste le chemin vers ton Express app

describe('redemarrerJeu', () => {
  const nomJoueur = 'test';

  it("get('/api/v1/jeu/redemarrerJeu')", async () => {
    // Crée d'abord un joueur pour pouvoir tester le redémarrage
    await request(app)
      .post('/api/v1/jeu/demarrerJeu')
      .send({ nom: nomJoueur });

    // Redémarrer le jeu
    const response = await request(app).get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.body.message).toContain('redémarré');
  });

  it("un test pour jouer qui retourne 404 après redemarrerJeu()", async () => {
    // Tenter de jouer après avoir redémarré le jeu
    const response = await request(app).get(`/api/v1/jeu/jouer/${nomJoueur}`);

    // Le status doit être 404 car le joueur n'existe plus
    expect(response.status).toBe(404);
  });
});
