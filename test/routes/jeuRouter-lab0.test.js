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
    const filename = path_1.default.join('src', 'routes', 'jeuRouter.ts');
    content = (0, fs_1.readFileSync)(filename, 'utf-8');
});
describe('src/routes/jeuRouter.ts', () => {
    it("devrait contenir this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))", () => {
        expect(content.includes("this._router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))")).toBeTruthy();
    });
    it("devrait contenir redemarrerJeu(req: Request, res: Response, next: NextFunction) {", () => {
        expect(content.includes("redemarrerJeu(req: Request, res: Response, next: NextFunction) {")).toBeTruthy();
    });
    it("devrait contenir this._controleurJeu.redemarrerJeu()", () => {
        expect(content.includes("this._controleurJeu.redemarrerJeu()")).toBeTruthy();
    });
    it("devrait contenir resultat.v3", () => {
        expect(content.includes("resultatObj.v3")).toBeTruthy();
    });
});
//# sourceMappingURL=jeuRouter-lab0.test.js.map