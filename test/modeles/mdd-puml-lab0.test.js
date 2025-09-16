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
    const filename = path_1.default.join('docs', 'modeles', 'mdd.puml');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('docs/modeles/mdd.puml', () => {
    it('devrait contenir les 3 dés', () => {
        expect(content.includes('JeuDeDés "1" -up- "3" Dé : inclut >')).toBeTruthy();
    });
});
//# sourceMappingURL=mdd-puml-lab0.test.js.map