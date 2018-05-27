import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import LicitacoesRoute from './routes/LicitacoesRoute'

class App{
    public express: express.Application

    constructor(){
        this.express = express()
        this.middleware();
        this.defineRoutes();    }

    private middleware(): void{
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private defineRoutes(): void{
        this.express.use("/senadores", LicitacoesRoute);
    }

}
export default new App().express