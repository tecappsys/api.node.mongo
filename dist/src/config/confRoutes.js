"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
// CLAISE ROUTES
const api_1 = tslib_1.__importDefault(require("../routes/api"));
const routers_path_1 = require("../shared/enum/routers-path");
const RateLimit = require('express-rate-limit');
class confRoutes {
    constructor(server) {
        const app = server;
        // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
        // see https://expressjs.com/en/guide/behind-proxies.html
        // app.set('trust proxy', 1);
        const limiter = RateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100 // limit each IP to 100 requests per windowMs
        });
        // Apply to all requests
        app.use(limiter);
        // Lectura y parseo del body
        // CORS
        app.disable('x-powered-by');
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(routers_path_1.ROUTER_PATHS.API, api_1.default);
        // [LOGS]
        // app.use( pathRoutes.logs, require('../routes/LogsRoutes'));
        // [ NOT FOUND ]
        app.use((req, res, next) => {
            res.status(404).json({
                msg: 'X7501: Error en la consulta'
            });
        });
    }
}
exports.default = confRoutes;
//# sourceMappingURL=confRoutes.js.map