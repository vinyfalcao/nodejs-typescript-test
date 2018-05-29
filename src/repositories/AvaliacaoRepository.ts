import * as AvaliacaoSchema from "../schemas/AvaliacaoSchema";

class AvaliacaoRepository{

    save(avaliacao): void{
        AvaliacaoSchema.create(avaliacao);
    }


}
export default new AvaliacaoRepository()