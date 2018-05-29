import SenadorSchema from "./SenadorSchema";
import { Document, Schema, Model, model} from "mongoose";
import { Avaliacao } from "../interfaces/Avaliacao";

class AvaliacaoSchema{

    avaliacaoSchema: Schema = new Schema({
        senador : SenadorSchema,
        texto: String
    });
    
}

export default new AvaliacaoSchema()
