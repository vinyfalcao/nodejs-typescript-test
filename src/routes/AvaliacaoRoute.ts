import * as express from 'express'


class AvaliacaoRoute{

    public router: express.Router

        constructor(){
            this.router = express.Router()
            this.routes();
        }

        private routes(): void{

        }

        
}

export default new AvaliacaoRoute().router