import * as express from 'express'
import Licitacoes from './Licitacoes'

    class Routes{
       public configRoutes(app: express.Application): void{
           console.log("Configuring Routes");
           app.use("/teste", Licitacoes);
        }
    }
export default new Routes()