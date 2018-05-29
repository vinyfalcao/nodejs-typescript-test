import { Document, Schema, Model, model} from "mongoose";
import AvaliacaoSchema from "./AvaliacaoSchema";
import { Senador } from "../interfaces/Senador";


class SenadorSchema{

     SenadorSchema: Schema = new Schema({
        CodigoParlamentar: String,
        NomeParlamentar: String,
        avaliacoes: [AvaliacaoSchema]
    });
}
export default new SenadorSchema();