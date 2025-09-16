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
    const filename = path_1.default.join('test', 'routes', 'jeuRouter-jouer.test.ts');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('test/routes/jeuRouter-jouer.test.ts', () => {
    it("devrait contenir expect(response.body.resultat.v3).toBeWithin(1, 7)", () => {
        expect(content.includes("expect(resultat.v3).toBeWithin(1, 7)")).toBeTruthy();
    });
});
//# sourceMappingURL=jouer-lab0.test.js.map