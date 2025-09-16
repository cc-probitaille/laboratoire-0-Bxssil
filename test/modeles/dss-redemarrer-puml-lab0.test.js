"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
let content = "";
beforeAll(async () => {
    const filename = path_1.default.join('docs', 'modeles', 'dss-redemarrerJeu.puml');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('docs/modeles/dss-redemarrerJeu.puml', () => {
    it("devrait contenir Joueur", () => {
        expect(content.includes("Joueur")).toBeTruthy();
    });
    it("devrait contenir Système", () => {
        expect(content.includes("Système")).toBeTruthy();
    });
    it("devrait contenir redemarrerJeu()", () => {
        expect(content.includes("redémarrerJeu()")).toBeTruthy();
    });
});
//# sourceMappingURL=dss-redemarrer-puml-lab0.test.js.map