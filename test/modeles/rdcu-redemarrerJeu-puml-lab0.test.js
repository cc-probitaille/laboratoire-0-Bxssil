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
    const filename = path_1.default.join('docs', 'modeles', 'rdcu-redemarrerJeu.puml');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('docs/modeles/rdcu-redemarrerJeu.puml', () => {
    it("devrait contenir :JeuDeDes", () => {
        expect(content.includes(":JeuDeDes")).toBeTruthy();
    });
    it("devrait contenir joueurs:", () => {
        expect(content.includes("joueurs:")).toBeTruthy();
    });
    it("devrait contenir Map<String, Joueur>", () => {
        expect(content.includes("Map<String, Joueur>")).toBeTruthy();
    });
    it("devrait contenir redemarrerJeu()", () => {
        expect(content.includes("redemarrerJeu()")).toBeTruthy();
    });
});
//# sourceMappingURL=rdcu-redemarrerJeu-puml-lab0.test.js.map