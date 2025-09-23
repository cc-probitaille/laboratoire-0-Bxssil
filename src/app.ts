import express from 'express';
import ExpressSession from 'express-session';
import logger from 'morgan';
import flash from 'express-flash-plus';

import { jeuRoutes } from './routes/jeuRouter';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.expressApp.set('view engine', 'pug');
    this.expressApp.use(express.static(__dirname + '/public') as express.RequestHandler);
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev') as express.RequestHandler);
    this.expressApp.use(express.json() as express.RequestHandler);
    this.expressApp.use(express.urlencoded({ extended: false }) as express.RequestHandler);
    this.expressApp.use(ExpressSession(
      {
        secret: 'My Secret Key',
        resave: false,
        saveUninitialized: true
      }));
    this.expressApp.use(flash());
  }

  // Configure API endpoints.
  private routes(): void {
    const titreBase = 'Jeu de dés';
    let router = express.Router();

    // utilisateur simulé
    let user;
    user = { nom: 'Pierre Trudeau', hasPrivileges: true, isAnonymous: false };
    // user = { isAnonymous: true }; // si personne n'est connecté

    // Route pour jouer (index)
    router.get('/', (req, res, next) => {
      res.render('index', {
        title: `${titreBase}`,
        user: user,
        joueurs: JSON.parse(jeuRoutes.controleurJeu.joueurs)
      });
    });

    // Route pour classement (stats)
    router.get('/stats', (req, res, next) => {
      const joueurs: Array<{ nom: string; lancers: number; lancersGagnes: number }> =
        JSON.parse(jeuRoutes.controleurJeu.joueurs);

      // ajouter propriété ratio
      const joueursAvecRatio = joueurs.map(j => ({
        ...j,
        ratio: j.lancers > 0 ? j.lancersGagnes / j.lancers : 0
      }));

      // trier par ratio décroissant, puis par succès décroissant
      joueursAvecRatio.sort((a, b) => {
        if (b.ratio !== a.ratio) return b.ratio - a.ratio;
        return (b.lancersGagnes ?? 0) - (a.lancersGagnes ?? 0);
      });

      res.render('stats', {
        title: `${titreBase}`,
        user: user,
        joueurs: joueursAvecRatio
      });
    });

    // Route to login
    router.get('/signin', async function (req, res) {
      if (user.isAnonymous) {
        res.render('signin', {
          title: `${titreBase}`
        })
      } else {
        return res.redirect('/');
      }
    });

    // Route to logout
    router.get('/signout', async function (req, res) {
      user = { isAnonymous: true };
      return res.redirect('/');
    });

    this.expressApp.use('/', router);
    this.expressApp.use('/api/v1/jeu', jeuRoutes.router);
  }
}

export default new App().expressApp;
