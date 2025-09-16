"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const filename = path_1.default.join('docs', 'lab0.pdf');
let content = '';
describe('docs/lab0.pdf', () => {
    it("devrait trouver un fichier docs/lab0.pdf", async () => {
        content = (0, fs_1.readFileSync)(filename, 'utf-8');
        expect(content).toBeTruthy();
    });
    it("devrait trouver que le fichier docs/labo.pdf est valide", () => {
        expect(content.lastIndexOf("%PDF-")).toEqual(0);
        expect(content.lastIndexOf("%%EOF")).toBeGreaterThan(-1);
    });
});
//# sourceMappingURL=pdf-lab0.test.js.map