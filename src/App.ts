import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/Routes';

class App{
    public express: express.Application

    constructor(){
        this.express = express()
        this.middleware();
        Routes.configRoutes();
    }

    private middleware(): void{
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void{
        const router = express.Router()
        router.get('/', (req, res) => {
            res.send('Hello World! FOI?')
        })
        this.express.use('/', router);
    }
}
export default new App().express