import { Router, Request, Response, NextFunction } from 'express';
import { JeuDeDes } from '../core/jeuDeDes';
import { InvalidParameterError } from '../core/errors/invalidParameterError';

export class JeuRouter {
  private _router: Router;
  private _controleurJeu: JeuDeDes;

  get controleurJeu() {
    return this._controleurJeu;
  }

  get router() {
    return this._router;
  }

  constructor() {
    this._controleurJeu = new JeuDeDes();
    this._router = Router();
    this.init();
  }

  /**
   * démarrer le jeu
   */
  public demarrerJeu(req: Request, res: Response, next: NextFunction) {
    const nom = req.body.nom;

    try {
      if (!nom) {
        throw new InvalidParameterError('Le paramètre nom est absent');
      }

      const joueur = this._controleurJeu.demarrerJeu(nom);
      const joueurObj = JSON.parse(joueur);

      req.flash('info', `Nouveau jeu pour ${nom}`);
      res.status(201).send({
        message: 'Success',
        status: res.status,
        joueur: joueurObj
      });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  /**
   * jouer une fois aux dés
   */
  public jouer(req: Request, res: Response, next: NextFunction) {
    const nom = req.params.nom;
    try {
      const resultatStr = this._controleurJeu.jouer(nom);
      const resultatObj = JSON.parse(resultatStr);

      const key = resultatObj.somme <= 10 ? 'win' : 'info';
      req.flash(key,
        `Résultat pour ${nom}: ${resultatObj.v1} + ${resultatObj.v2} + ${resultatObj.v3} = ${resultatObj.somme}`);

      res.status(200).send({
        message: 'Success',
        status: res.status,
        resultat: {
          v1: resultatObj.v1,
          v2: resultatObj.v2,
          v3: resultatObj.v3,
          somme: resultatObj.somme,
          nom: resultatObj.nom,
          lancers: resultatObj.lancers,
          reussites: resultatObj.reussites,
          messageJeu: resultatObj.message
        }
      });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  /**
   * terminer le jeu
   */
  public terminerJeu(req: Request, res: Response, next: NextFunction) {
    const nom = req.params.nom;

    try {
      const resultatStr = this._controleurJeu.terminerJeu(nom);
      const resultatObj = JSON.parse(resultatStr);

      req.flash('info', `Jeu terminé pour ${nom}`);
      res.status(200).send({
        message: 'Success',
        status: res.status,
        resultat: resultatObj
      });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  /**
   * redémarrer le jeu
   */
  public redemarrerJeu(req: Request, res: Response, next: NextFunction) {
    try {
      this._controleurJeu.redemarrerJeu();
      req.flash('info', 'Le jeu a été redémarré.');
      res.status(200).send({
        message: 'Success',
        status: 'Success'
      });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  /**
   * retourner la liste des joueurs
   */
  public getJoueurs(req: Request, res: Response, next: NextFunction) {
    try {
      const joueurs = this._controleurJeu.joueurs;
      res.status(200).send(JSON.parse(joueurs));
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  /**
   * gestion des erreurs
   */
  private _errorCode500(error: any, req: Request, res: Response<any, Record<string, any>>) {
    req.flash('error', error.message);
    res.status(error.code || 500).json({ error: error.toString() });
  }

  /**
   * initialiser les routes
   */
  init() {
    this._router.post('/demarrerJeu', this.demarrerJeu.bind(this));
    this._router.get('/jouer/:nom', this.jouer.bind(this));
    this._router.get('/terminerJeu/:nom', this.terminerJeu.bind(this));
    this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this));
    this._router.get('/joueurs', this.getJoueurs.bind(this)); // <-- nouvelle route
  }
}

// exporter le routeur configuré
export const jeuRoutes = new JeuRouter();
jeuRoutes.init();
