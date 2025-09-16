"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
const express_flash_plus_1 = __importDefault(require("express-flash-plus"));
const jeuRouter_1 = require("./routes/jeuRouter");
// Creates and configures an ExpressJS web server.
class App {
    // ref to Express instance
    expressApp;
    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = (0, express_1.default)();
        this.middleware();
        this.routes();
        this.expressApp.set('view engine', 'pug');
        this.expressApp.use(express_1.default.static(__dirname + '/public')); // https://expressjs.com/en/starter/static-files.html
    }
    // Configure Express middleware.
    middleware() {
        this.expressApp.use((0, morgan_1.default)('dev'));
        this.expressApp.use(express_1.default.json());
        this.expressApp.use(express_1.default.urlencoded({ extended: false }));
        this.expressApp.use((0, express_session_1.default)({
            secret: 'My Secret Key',
            resave: false,
            saveUninitialized: true
        }));
        this.expressApp.use((0, express_flash_plus_1.default)());
    }
    // Configure API endpoints.
    routes() {
        const titreBase = 'Jeu de dés';
        let router = express_1.default.Router();
        // Le squelette ne traite pas la gestion des connexions d'utilisateur, mais
        // les gabarits Pug (navbar) supportent l'affichage selon l'état de connexion 
        // dans l'objet user, qui peut avoir deux valeurs (p.ex. admin ou normal)
        let user;
        // Si l'utilisateur est connecté, le gabarit Pug peut afficher des options, 
        // le nom de l'utilisateur et une option pour se déconnecter.
        user = { nom: 'Pierre Trudeau', hasPrivileges: true, isAnonymous: false };
        // Si user.isAnonymous est vrai, le gabarit Pug affiche une option pour se connecter.
        // user = { isAnonymous: true }; // utilisateur quand personne n'est connecté
        // Route pour jouer (index)
        router.get('/', (req, res, next) => {
            res.render('index', 
            // passer objet au gabarit (template) Pug
            {
                title: `${titreBase}`,
                user: user,
                joueurs: JSON.parse(jeuRouter_1.jeuRoutes.controleurJeu.joueurs)
            });
        });
        // Route pour classement (stats)
        router.get('/stats', (req, res, next) => {
            res.render('stats', 
            // passer objet au gabarit (template) Pug
            {
                title: `${titreBase}`,
                user: user,
                // créer nouveau tableau de joueurs qui est trié par ratio
                joueurs: JSON.parse(jeuRouter_1.jeuRoutes.controleurJeu.joueurs)
            });
        });
        // Route to login
        router.get('/signin', async function (req, res) {
            if (user.isAnonymous) {
                // simuler un login
                res.render('signin', {
                    title: `${titreBase}`
                });
            }
            else {
                return res.redirect('/');
            }
        });
        // Route to login
        router.get('/signout', async function (req, res) {
            // simuler une déconnexion
            user = { isAnonymous: true };
            return res.redirect('/');
        });
        this.expressApp.use('/', router); // routage de base
        this.expressApp.use('/api/v1/jeu', jeuRouter_1.jeuRoutes.router); // tous les URI pour le scénario jeu (DSS) commencent ainsi
    }
}
exports.default = new App().expressApp;
//# sourceMappingURL=app.js.map