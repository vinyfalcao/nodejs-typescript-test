import * as express from 'express'

    class Licitacoes{
        public router: express.Router

        constructor(){
            this.router = express.Router()
            this.routes();
        }

        private routes(): void{
            this.router.get("/", (req, res)=>{
                res.send("Licitações Page")
            })
        }

    }

export default new Licitacoes().router
