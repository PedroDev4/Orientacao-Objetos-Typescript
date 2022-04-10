import { Contato } from "../entity/Contato";
import { ContatoDAO } from "../core/ContatoDAO";
class ContatoJsonDao extends ContatoDAO {

    constructor() {
        super('contatos.json');
    }

    async recuperarContatos(): Promise<Contato[]> {
        const listaObj: Array<any> = JSON.parse(this.conteudoStr);

        const contatos = listaObj.map(obj => new Contato(
            obj.nome,
            obj.telefone,
            obj.email,
            new Date(obj.dataNascimento)
        ));

        return contatos;
    }

}

export { ContatoJsonDao };