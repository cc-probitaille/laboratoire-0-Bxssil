"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JeuDeDes = void 0;
const de_1 = require("./de");
const joueur_1 = require("./joueur");
const notFoundError_1 = require("./errors/notFoundError");
const alreadyExistsError_1 = require("./errors/alreadyExistsError");
class JeuDeDes {
    // classe contrôleur GRASP, car JeuDeDes est un objet racine dans le MDD
    // map des Joueurs
    _joueurs;
    _d1;
    _d2;
    constructor() {
        this._joueurs = new Map();
        this._d1 = new de_1.De();
        this._d2 = new de_1.De();
    }
    /**
     *  opérations systèmes (du DSS), responsabilités données aux contrôleur GRASP
     */
    demarrerJeu(nom) {
        if (this._joueurs.get(nom)) {
            throw new alreadyExistsError_1.AlreadyExistsError(`Joueur '${nom}' existe déjà.`);
        }
        const joueur = new joueur_1.Joueur(nom);
        this._joueurs.set(nom, joueur);
        // ne pas retourner l'objet de la couche domaine
        return JSON.stringify(joueur);
    }
    redemarrerJeu() {
        this._joueurs.clear();
    }
    jouer(nom) {
        const joueur = this._joueurs.get(nom);
        if (!joueur) {
            throw new notFoundError_1.NotFoundError(`Joueur '${nom}' n'existe pas.`);
        }
        const somme = this.brasser();
        joueur.lancer();
        const gagne = somme === 7;
        if (gagne)
            joueur.gagner();
        const resultat = {
            nom: nom,
            somme: somme,
            lancers: joueur.lancers,
            reussites: joueur.lancersGagnes,
            v1: this._d1.valeur,
            v2: this._d2.valeur,
            message: `Vous avez ${(gagne ? "gagné!!!" : "perdu.")}`
        };
        // ne pas retourner l'objet de la couche domaine
        return JSON.stringify(resultat);
    }
    terminerJeu(nom) {
        if (!this._joueurs.get(nom)) {
            throw new notFoundError_1.NotFoundError(`Joueur '${nom}' n'existe pas.`);
        }
        this._joueurs.delete(nom);
        const resultat = {
            nom: nom,
            message: "Merci d'avoir joué."
        };
        // ne pas retourner l'objet de la couche domaine
        return JSON.stringify(resultat);
    }
    // d'autres méthodes (des RDCU)
    brasser() {
        this._d1.brasser();
        this._d2.brasser();
        const v1 = this._d1.valeur;
        const v2 = this._d2.valeur;
        const somme = v1 + v2;
        return somme;
    }
    get joueurs() {
        return JSON.stringify(Array.from(this._joueurs.values()));
    }
}
exports.JeuDeDes = JeuDeDes;
//# sourceMappingURL=jeuDeDes.js.map