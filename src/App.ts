import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import mongoose = require("mongoose");
import Senador from './routes/SenadorRoute'
import Avaliacao from './routes/AvaliacaoRoute';

class App{
    public express: express.Application

    constructor(){
        this.express = express()
        this.middleware();
        this.defineRoutes();   
        this.databaseConfig();
    }

    private middleware(): void{
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private databaseConfig(): void{
        const MONGODB_CONNECTION: string = "mongodb+srv://mongodb:mongodb@cluster0-rjxdg.mongodb.net/test?retryWrites=true";
        //connect to mongoose
        let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
    }

    private defineRoutes(): void{
        this.express.use("/senadores", Senador);
        this.express.use("/avaliacao", Avaliacao);
    }

}
export default new App().express