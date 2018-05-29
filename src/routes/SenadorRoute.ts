import * as express from 'express'
import SenadorService from '../services/SenadorService'

    class SenadorRoute{
        public router: express.Router

        constructor(){
            this.router = express.Router()
            this.routes();
        }

        private routes(): void{
            this.router.use(function timeLog(req, res, next) {
                console.log('Time: ', Date.now());
                next();
              });

            this.router.get("/", this.getAll);
        }

        private getAll(req, res): void{
            SenadorService.getLicitacoes((response) =>{
                res.json(response);
            });
        }

    }

export default new SenadorRoute().router