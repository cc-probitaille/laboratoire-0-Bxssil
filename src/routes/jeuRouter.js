"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jeuRoutes = exports.JeuRouter = void 0;
const express_1 = require("express");
const jeuDeDes_1 = require("../core/jeuDeDes");
const invalidParameterError_1 = require("../core/errors/invalidParameterError");
class JeuRouter {
    _router;
    _controleurJeu; // contrôleur GRASP
    get controleurJeu() {
        return this._controleurJeu;
    }
    get router() {
        return this._router;
    }
    /**
     * Initialiser le router
     */
    constructor() {
        this._controleurJeu = new jeuDeDes_1.JeuDeDes(); // un routeur pointe vers au moins un contrôleur GRASP
        this._router = (0, express_1.Router)();
        this.init();
    }
    /**
     * démarrer le jeu
     */
    demarrerJeu(req, res, next) {
        const nom = req.body.nom;
        try {
            // POST ne garantit pas que tous les paramètres de l'opération système sont présents
            if (!nom) {
                throw new invalidParameterError_1.InvalidParameterError('Le paramètre nom est absent');
            }
            // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
            const joueur = this._controleurJeu.demarrerJeu(nom);
            const joueurObj = JSON.parse(joueur);
            req.flash('info', `Nouveau jeu pour ${nom}`);
            res.status(201)
                .send({
                    message: 'Success',
                    status: res.status,
                    joueur: joueurObj
                });
        }
        catch (error) {
            // console.error(error);
            this._errorCode500(error, req, res);
        }
    }
    /**
     * jouer une fois aux dés
     */
    jouer(req, res, next) {
        const nom = req.params.nom;
        try {
            // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
            const resultat = this._controleurJeu.jouer(nom);
            const resultatObj = JSON.parse(resultat);
            // flash un message selon le résultat
            const key = resultatObj.somme == 7 ? 'win' : 'info';
            req.flash(key, `Résultat pour ${nom}: ${resultatObj.v1} + ${resultatObj.v2} = ${resultatObj.somme}`);
            res.status(200)
                .send({
                    message: 'Success',
                    status: res.status,
                    resultat
                });
        }
        catch (error) {
            // console.error(error);
            this._errorCode500(error, req, res);
        }
    }
    _errorCode500(error, req, res) {
        req.flash('error', error.message);
        res.status(error.code).json({ error: error.toString() });
    }
    /**
     * terminer
     */
    terminerJeu(req, res, next) {
        // obtenir nom de la requête
        const nom = req.params.nom;
        try {
            // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
            const resultat = this._controleurJeu.terminerJeu(nom);
            req.flash('info', `Jeu terminé pour ${nom}`);
            res.status(200)
                .send({
                    message: 'Success',
                    status: res.status,
                    resultat
                });
        }
        catch (error) {
            // console.error(error);
            this._errorCode500(error, req, res);
        }
    }
    /**
   * redémarrer le jeu
   */
    redemarrerJeu(req, res, next) {
        try {
            // Appeler l'opération système dans le contrôleur GRASP
            this._controleurJeu.redemarrerJeu();
            // Ajouter un message flash pour informer l'utilisateur
            req.flash('info', 'Le jeu a été redémarré.');
            // Retourner un code HTTP 200 avec un message de succès
            res.status(200).send({
                message: 'Le jeu a été redémarré avec succès.',
                status: res.status
            });
        }
        catch (error) {
            this._errorCode500(error, req, res);
        }
    }
    /**
       * Take each handler, and attach to one of the Express.Router's
       * endpoints.
       */
    init() {
        this._router.post('/demarrerJeu', this.demarrerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
        this._router.get('/jouer/:nom', this.jouer.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
        this._router.get('/terminerJeu/:nom', this.terminerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
        this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    }
}
exports.JeuRouter = JeuRouter;
// exporter its configured Express.Router
exports.jeuRoutes = new JeuRouter();
exports.jeuRoutes.init();
//# sourceMappingURL=jeuRouter.js.map