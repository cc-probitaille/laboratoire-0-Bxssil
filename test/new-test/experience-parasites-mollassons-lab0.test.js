"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest-extended");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const nbMotsDirectives = 147;
let content = "";
beforeAll(async () => {
    const filename = path_1.default.join('docs', 'experience-parasites-mollassons.md');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('docs/experience-parasites-mollassons.md', () => {
    it(`Doit contenir au moins 300 mots (sans les ${nbMotsDirectives} dans les directives)`, () => {
        expect(wordCount(content)).toBeGreaterThanOrEqual(300 + nbMotsDirectives);
    });
});
// https://stackoverflow.com/a/40385425/1168342
function wordCount(str) {
    return str.split(' ')
        .filter(function (n) { return n != ''; })
        .length;
}
//# sourceMappingURL=experience-parasites-mollassons-lab0.test.js.map