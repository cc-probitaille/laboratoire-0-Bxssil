import { Router, Request, Response, NextFunction } from 'express';
import { JeuDeDes } from '../core/jeuDeDes';
export declare class JeuRouter {
    private _router;
    private _controleurJeu;
    get controleurJeu(): JeuDeDes;
    get router(): Router;
    /**
     * Initialiser le router
     */
    constructor();
    /**
     * démarrer le jeu
     */
    demarrerJeu(req: Request, res: Response, next: NextFunction): void;
    /**
     * jouer une fois aux dés
     */
    jouer(req: Request, res: Response, next: NextFunction): void;
    private _errorCode500;
    /**
     * terminer
     */
    terminerJeu(req: Request, res: Response, next: NextFunction): void;
    /**
   * redémarrer le jeu
   */
    redemarrerJeu(req: Request, res: Response, next: NextFunction): void;
    /**
       * Take each handler, and attach to one of the Express.Router's
       * endpoints.
       */
    init(): void;
}
export declare const jeuRoutes: JeuRouter;
//# sourceMappingURL=jeuRouter.d.ts.map