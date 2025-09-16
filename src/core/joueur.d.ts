export declare class Joueur {
    private _nom;
    private _nbLancers;
    private _nbLancersGagnes;
    constructor(nom: string);
    get nom(): string;
    /**
     * Assainir (sanitize) le nom.
     * Il serait préférable d'avoir un mutateur privé, mais TypeScript n'aime pas ça
     * @param nom Le nom à assainir
     * @return Le nom, sans espaces blancs au début ou à la fin
     */
    private assainirNom;
    get lancers(): number;
    get lancersGagnes(): number;
    lancer(): void;
    gagner(): void;
    toJSON(): {
        nom: string;
        lancers: number;
        lancersGagnes: number;
    };
}
//# sourceMappingURL=joueur.d.ts.map