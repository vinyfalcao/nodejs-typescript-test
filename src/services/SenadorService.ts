import SenadorClient from '../client/SenadorClient'
import Senador from '../interfaces/Senador'
class SenadorService {

    public getLicitacoes(callback) {
        SenadorClient.getSenadores((body) => {
            callback(body.ListaParlamentarEmExercicio.Parlamentares.Parlamentar.map((elem) => {
                var senador: Senador = {
                    CodigoParlamentar: elem.IdentificacaoParlamentar.CodigoParlamentar,
                    NomeParlamentar: elem.IdentificacaoParlamentar.NomeParlamentar
                }
                return senador;
            }));
        });
    }

}
export default new SenadorService()