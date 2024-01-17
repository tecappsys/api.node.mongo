import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';

// CLAISE ROUTES
import ApiRoutes from '../routes/api';


import { ROUTER_PATHS } from '../shared/enum/routers-path'; 

const RateLimit = require('express-rate-limit');

class confRoutes{
    constructor(server:Application){
        const app = server;
        // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
        // see https://expressjs.com/en/guide/behind-proxies.html
        // app.set('trust proxy', 1);
        const limiter = RateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100 // limit each IP to 100 requests per windowMs
        });
        
        // Apply to all requests
        app.use(limiter);
    
        // Lectura y parseo del body
        // CORS
        app.disable('x-powered-by');
        app.use( cors() );
        app.use( express.json() );

        app.use( ROUTER_PATHS.API, ApiRoutes );
        
        // [LOGS]
        // app.use( pathRoutes.logs, require('../routes/LogsRoutes'));

        // [ NOT FOUND ]
        app.use( (req:Request, res:Response, next:NextFunction) => {
            res.status(404).json({
                msg: 'X7501: Error en la consulta'
            });
        });
    }
}

export default confRoutes;