export declare class JeuDeDes {
    private _joueurs;
    private _d1;
    private _d2;
    constructor();
    /**
     *  opérations systèmes (du DSS), responsabilités données aux contrôleur GRASP
     */
    demarrerJeu(nom: string): string;
    redemarrerJeu(): void;
    jouer(nom: string): string;
    terminerJeu(nom: string): string;
    brasser(): number;
    get joueurs(): string;
}
//# sourceMappingURL=jeuDeDes.d.ts.map