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
    const filename = path_1.default.join('docs', 'modeles', 'rdcu-jouer.puml');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
    console.log(filename);
});
describe('docs/modeles/rdcu-jouer.puml', () => {
    it('devrait contenir participant "d3:De" as d3 ', () => {
        expect(content.includes('participant "d3:De" as d3')).toBeTruthy();
    });
    it('devrait contenir  participant "d3:De" as d3', () => {
        expect(content.includes('participant "d3:De" as d3')).toBeTruthy();
    });
    it('devrait contenir  c->d3 : brasser() plus GRASP', () => {
        expect(content.includes('c->d3 : brasser()')).toBeTruthy();
    });
    // it('devrait contenir note right : selon Expert;', () => {
    //   expect(content.includes('note right : selon Expert')).toBeTruthy();
    // });
    it('devrait contenir c->d3 : v3 = valeur', () => {
        expect(content.includes('c->d3 : v3 = valeur')).toBeTruthy();
    });
    // it('devrait contenir note right : selon Expert', () => {
    //   expect(content.includes('note right : selon Expert')).toBeTruthy();
    // });
    it('devrait contenir opt v1 + v2 + v3 <= 10', () => {
        expect(content.includes('opt v1 + v2 + v3 <= 10')).toBeTruthy();
    });
});
//# sourceMappingURL=rdcu-jouer-puml-lab0.test.js.map