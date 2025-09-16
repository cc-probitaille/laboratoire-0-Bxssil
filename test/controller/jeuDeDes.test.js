"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const jeuDeDes_1 = require("../../src/core/jeuDeDes");
describe('JeuDeDesTest', () => {
    let controller;
    beforeEach(async () => {
        controller = new jeuDeDes_1.JeuDeDes();
    });
    it('demarrerJeux', async () => {
        const result = controller.demarrerJeu('yvan');
        expect(result).toEqual("{\"nom\":\"yvan\",\"lancers\":0,\"lancersGagnes\":0}");
        expect(() => { controller.demarrerJeu('yvan'); }).toThrow("Joueur 'yvan' existe déjà.");
        const resultat = controller.jouer('yvan');
        expect(JSON.parse(resultat).lancers).toEqual(1);
        controller.brasser();
        expect(JSON.parse(controller.joueurs)[0].lancers).toEqual(1);
    });
});
//# sourceMappingURL=jeuDeDes.test.js.map