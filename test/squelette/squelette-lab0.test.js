"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
let content = "";
beforeAll(async () => {
    const filename = path_1.default.join('docs', 'Squelette.md');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('ReadmeSquelette', () => {
    it("devrait contenir D'où vient l'idée de base pour ce squelette?", () => {
        expect(content.includes("D'où vient l'idée de base pour ce squelette?")).toBeTruthy();
    });
    it("devrait contenir Le Joueur demande à redémarrer l'application", () => {
        expect(content.includes("Le Joueur demande à redémarrer l'application")).toBeTruthy();
    });
    it("devrait contenir Le Système termine tous les jeux en cours et redémarre l'application", () => {
        expect(content.includes("Le Système termine tous les jeux en cours et redémarre l'application")).toBeTruthy();
    });
    it("devrait contenir - d3.valeur est devenue un nombre entier aléatoire entre 1 et 6", () => {
        expect(content.includes("- d3.valeur est devenue un nombre entier aléatoire entre 1 et 6")).toBeTruthy();
    });
    it("devrait contenir - j.nbLancersGagnés a été incrémenté si la totale de d1.valeur, d2.valeur, d3.valeur est plus petite ou égale à 10", () => {
        expect(content.includes("- j.nbLancersGagnés a été incrémenté si la totale de d1.valeur, d2.valeur, d3.valeur est plus petite ou égale à 10")).toBeTruthy();
    });
});
//# sourceMappingURL=squelette-lab0.test.js.map