import { Avaliacao } from "./Avaliacao";

export interface Senador{
    CodigoParlamentar: String;
    NomeParlamentar?: String;
    avaliacoes?: [Avaliacao];
}