import express, { Application } from 'express';
import confRoutes from '../config/confRoutes';
import path from 'path'
import { genericLog } from '../utils/helpers';
import { mongo } from './confDBMongo';
const fs = require('fs');

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '3100';

        // Mongo DB Connect
        mongo();

        // Start Methods
        this.middlewares();

        // Aplication Routes
        const routes = new confRoutes(this.app);
        routes;
    }

    middlewares() {

        const testDir = path.join(__dirname, '../../tmp')
        if (!fs.existsSync(testDir)){
          fs.mkdirSync(testDir);
        }

        // Read Body
        this.app.use( express.json() );
    }

    listen() {
        this.app.listen( this.port, () => {
            genericLog({title:`RUN IN PORT: `,message:this.port});
        })
    }

}

export default Server;