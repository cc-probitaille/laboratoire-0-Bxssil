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
    const filename = path_1.default.join('docs', 'modeles', 'dcu.puml');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
    console.log(filename);
});
describe('docs/modeles/dcu.puml', () => {
    it("devrait contenir (Redémarrer) as R #powderblue", () => {
        expect(content.includes("(Redémarrer) as R #powderblue")).toBeTruthy();
    });
    it("devrait contenir J -- R", () => {
        expect(content.includes("J -- R")).toBeTruthy();
    });
});
//# sourceMappingURL=dcu-puml-lab0.test.js.map