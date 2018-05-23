import * as express from 'express'
import Licitacoes from './Licitacoes'

    class Routes{
        private express: express.Application

        constructor(){
            this.express = express();
            this.configRoutes();
        }

       public configRoutes(): void{
            this.express.use("/licitacoes", Licitacoes)
        }

    }
export default new Routes()