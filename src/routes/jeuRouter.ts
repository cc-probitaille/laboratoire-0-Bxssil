import { Router, Request, Response, NextFunction } from 'express';
import { JeuDeDes } from '../core/jeuDeDes';
import { InvalidParameterError } from '../core/errors/invalidParameterError';

export class JeuRouter {
  private _router: Router;
  private _controleurJeu: JeuDeDes;  // contrôleur GRASP

  get controleurJeu() {
    return this._controleurJeu;
  }

  get router() {
    return this._router;
  }

  constructor() {
    this._controleurJeu = new JeuDeDes();  // un routeur pointe vers au moins un contrôleur GRASP
    this._router = Router();
    this.init();
  }

  public demarrerJeu(req: Request, res: Response, next: NextFunction) {
    const nom = req.body.nom;
    try {
      if (!nom) {
        throw new InvalidParameterError('Le paramètre nom est absent');
      }
      const joueur = this._controleurJeu.demarrerJeu(nom);
      const joueurObj = JSON.parse(joueur);
      req.flash('info', `Nouveau jeu pour ${nom}`);
      res.status(201)
        .send({
          message: 'Success',
          status: res.status,
          joueur: joueurObj
        });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  public jouer(req: Request, res: Response, next: NextFunction) {
    const nom = req.params.nom;
    try {
      const resultat = this._controleurJeu.jouer(nom);
      const resultatObj = JSON.parse(resultat);
      const _v3Check = resultatObj.v3;

      const key = resultatObj.somme <= 10 ? 'win' : 'info'; // règle de victoire (≤10)
      req.flash(key,
        `Résultat pour ${nom}: ${resultatObj.v1} + ${resultatObj.v2} + ${resultatObj.v3} = ${resultatObj.somme}`);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          resultat
        });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  private _errorCode500(error: any, req: Request, res: Response<any, Record<string, any>>) {
    req.flash('error', error.message);
    res.status(error.code || 500).json({ error: error.toString() });
  }

  public terminerJeu(req: Request, res: Response, next: NextFunction) {
    const nom = req.params.nom;
    try {
      const resultat = this._controleurJeu.terminerJeu(nom);
      req.flash('info', `Jeu terminé pour ${nom}`);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          resultat
        });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  // 🔽 nouveau: lister les joueurs (utilisé par les tests après redémarrage)
  public getJoueurs(req: Request, res: Response, next: NextFunction) {
    try {
      const joueurs = JSON.parse(this._controleurJeu.joueurs);
      res.status(200).send(joueurs);
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  public redemarrerJeu(req: Request, res: Response, next: NextFunction) {
    try {
      const etat = this._controleurJeu.redemarrerJeu();
      const etatObj = etat ? JSON.parse(etat) : {};

      req.flash('info', `L'application redémarre`);
      res.status(200).send({
        message: 'Success',
        status: res.status,
        etat: etatObj
      });
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  init() {
    this._router.post('/demarrerJeu', this.demarrerJeu.bind(this));
    this._router.get('/jouer/:nom', this.jouer.bind(this));
    this._router.get('/terminerJeu/:nom', this.terminerJeu.bind(this));
    this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this));
    // 🔽 nouvelle route pour les tests
    this._router.get('/joueurs', this.getJoueurs.bind(this));
  }
}

// exporter its configured Express.Router
export const jeuRoutes = new JeuRouter();
jeuRoutes.init();
