"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const indexPugFilename = path_1.default.join('views', 'index.pug');
const contentIndex = (0, fs_1.readFileSync)(indexPugFilename, 'utf-8');
const classementPugFilename = path_1.default.join('views', 'stats.pug');
const contentClassement = (0, fs_1.readFileSync)(classementPugFilename, 'utf-8');
describe('views/index.pug', () => {
    it("devrait contenir button#redemarrer Redémarrer", () => {
        expect(contentIndex.includes("button#redemarrer Redémarrer")).toBeTruthy();
    });
});
describe('views/stats.pug', () => {
    it("devrait ne pas avoir la colonne ratio en commentaire ", () => {
        expect(contentClassement.includes(`//- td(style="text-align: right; font-family: monospace") #{joueur.ratio.toFixed(8)}`)).toBeFalsy();
        expect(contentClassement.includes(`  td(style="text-align: right; font-family: monospace") #{joueur.ratio.toFixed(8)}`)).toBeTruthy();
    });
});
//# sourceMappingURL=index-lab0.test.js.map