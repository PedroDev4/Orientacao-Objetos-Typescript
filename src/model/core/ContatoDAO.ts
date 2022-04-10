import path from 'path';
import fs from 'fs';
import { Contato } from '../entity/Contato';

export abstract class ContatoDAO {

    protected conteudoStr: string;
    protected caminhoArquivo: string;

    constructor(nomeArquivo: string) {
        this.caminhoArquivo = path.join(__dirname, '../', '../', 'data', nomeArquivo);

        this.conteudoStr = fs.readFileSync(this.caminhoArquivo, 'utf-8'); // utf-8 garante leitura como string (Sem o UTF, ele faz o read como um buffer)
    }

    abstract recuperarContatos(): Promise<Contato[]>;

}