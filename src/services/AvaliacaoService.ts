import AvaliacaoRepository from "../repositories/AvaliacaoRepository";
import { IAvaliacaoSchema } from "../schemas/AvaliacaoSchema";

class AvaliacaoService {

    public saveAvaliacao(avaliacao: IAvaliacaoSchema) {
        AvaliacaoRepository.save(avaliacao)
    }

}
export default new AvaliacaoService()