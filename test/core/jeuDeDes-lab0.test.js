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
    const filename = path_1.default.join('src', 'core', 'jeuDeDes.ts');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('src/core/jeuDeDes.ts', () => {
    it("devrait contenir redemarrerJeu() {", () => {
        expect(content.includes("redemarrerJeu() {")).toBeTruthy();
    });
    it("devrait contenir this._joueurs.clear()", () => {
        expect(content.includes("this._joueurs.clear()")).toBeTruthy();
    });
    it("devrait contenir this._d3 = new De()", () => {
        expect(content.includes("this._d3 = new De()")).toBeTruthy();
    });
    it("devrait contenir this._d3.brasser()", () => {
        expect(content.includes("this._d3.brasser()")).toBeTruthy();
    });
    it("devrait contenir const v3 = this._d3.valeur", () => {
        expect(content.includes("const v3 = this._d3.valeur")).toBeTruthy();
    });
    it("devrait contenir const somme = v1 + v2 + v3", () => {
        expect(content.includes("const somme = v1 + v2 + v3")).toBeTruthy();
    });
    it("devrait contenir <= 10", () => {
        expect(content.includes("<= 10")).toBeTruthy();
    });
    it("devrait contenir v3: this._d3.valeur", () => {
        expect(content.includes("v3: this._d3.valeur")).toBeTruthy();
    });
});
//# sourceMappingURL=jeuDeDes-lab0.test.js.map