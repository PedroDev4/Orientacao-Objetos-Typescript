import { Contato } from "../../entity/Contato";

export interface IContatoDao {
    recuperarContatos(): Promise<Contato[]>;
}
