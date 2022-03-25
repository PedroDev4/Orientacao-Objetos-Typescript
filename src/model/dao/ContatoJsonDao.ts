import { Contato } from "../entity/Contato";
import { IContatoDao } from "./interfaces/IContatoDao";
import path from 'path';
import fs from 'fs';

class ContatoJsonDao implements IContatoDao {

    private _caminhoArquivo: string;

    constructor() {
        this._caminhoArquivo = path.join(__dirname, '../', '../', 'data', 'contatos.json');
    }

    async recuperarContatos(): Promise<Contato[]> {
        const conteudoStr = fs.readFileSync(this._caminhoArquivo, 'utf-8'); // utf-8 garante leitura como string (Sem o UTF, ele faz o read como um buffer)

        const listaObj: Array<any> = JSON.parse(conteudoStr);

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