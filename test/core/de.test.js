"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const de_1 = require("../../src/core/de");
const de = new de_1.De();
describe('De', () => {
    it('devrait toujours avoir une valeur entre 1 et 6 à l\'intialisation', async () => {
        for (let i = 0; i < 100; i++) {
            const de1 = new de_1.De();
            expect(de1.valeur).toBeWithin(1, 7);
        }
    });
    it('devrait toujours avoir une valeur entre 1 et 6 après brasser', async () => {
        for (let i = 0; i < 100; i++) {
            de.brasser();
            expect(de.valeur).toBeWithin(1, 7);
        }
    });
    it('devrait donner finalement toutes les valeurs entre 1 et 6 après brasser', async () => {
        const resultats = new Set();
        for (let i = 0; i < 100; i++) {
            de.brasser();
            resultats.add(de.valeur);
        }
        expect(resultats.size).toBe(6);
        for (let i = 0; i < 6; i++) {
            expect(resultats.has(i + 1));
        }
    });
});
//# sourceMappingURL=de.test.js.map