import SenadorClient from '../client/SenadorClient'

class SenadorService{

    public getLicitacoes(callback){
        SenadorClient.getSenadores(callback);
    }

}
export default new SenadorService()