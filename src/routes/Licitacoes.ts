import * as express from 'express'

    class Licitacoes{
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

            this.router.get("/", (req, res)=>{
                res.json({id: 1, name : "Licitação 1"});
            })
        }

    }

export default new Licitacoes().router