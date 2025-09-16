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
describe('README identification', () => {
    it('devrait trouver votre nom', () => {
        expect(content.includes("Entrer votre nom")).toBeFalsy();
    });
    it('devrait trouver votre courriel', () => {
        expect(content.includes("Entrer votre courriel")).toBeFalsy();
    });
    it('devrait trouver Votre code moodle', () => {
        expect(content.includes("Entrer votre code moodle obtenu à partir de Signets")).toBeFalsy();
    });
    it("devrait trouver votre compte github", () => {
        expect(content.includes("Entrer l'identifiant de votre compte github")).toBeFalsy();
    });
});
//# sourceMappingURL=identification-lab0.test.js.map