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
    const filename = path_1.default.join('test', 'routes', 'jeuRouter-redemarrerJeu-lab0.test.ts');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('redemarrerJeu.test.ts', () => {
    it("devrait contenir \"get('/api/v1/jeu/redemarrerJeu')\"", () => {
        expect(content.includes("get('/api/v1/jeu/redemarrerJeu')")).toBeTruthy();
    });
    it("devrait contenir un test pour jouer qui retourne 404 (après redemarrerJeu()", () => {
        expect(content.includes("/api/v1/jeu/jouer/")).toBeTruthy();
        expect(content.includes(".status).toBe(404)")).toBeTruthy();
    });
});
//# sourceMappingURL=redemarrerJeu-lab0.test.js.map