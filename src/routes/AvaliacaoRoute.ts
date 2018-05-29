import * as express from 'express'
import AvaliacaoService from '../services/AvaliacaoService';


class AvaliacaoRoute{

    public router: express.Router;

        constructor(){
            this.router = express.Router()
            this.routes();
        }

        private routes(): void{
            this.router.post("/", this.save);
        }

        private save(req, res){
            AvaliacaoService.saveAvaliacao(req.body);
        }

        
}

export default new AvaliacaoRoute().router