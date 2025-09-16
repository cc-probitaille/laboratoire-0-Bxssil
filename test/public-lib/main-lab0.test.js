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
    const filename = path_1.default.join('public', 'lib', 'main.js');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('public/lib/main.js', () => {
    it("devrait utiliser fetch pour le bouton redémarrer", () => {
        expect(content.includes(`document.getElementById("redemarrer").addEventListener("click", function () {`)).toBeTruthy();
        expect(content.includes(`fetch("/api/v1/jeu/redemarrerJeu")`)).toBeTruthy();
    });
});
//# sourceMappingURL=main-lab0.test.js.map