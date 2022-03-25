import path from "path";
import { Contato } from "../entity/Contato";
import { IContatoDao } from "./interfaces/IContatoDao";
import fs from 'fs';
import csvParse from 'csv-parse';

class ContatoCsvDao implements IContatoDao {

    private _caminhoArquivo: string;

    constructor() {
        this._caminhoArquivo = path.join(__dirname, '../', '../', 'data', 'contatos.csv');
    }

    async recuperarContatos(): Promise<Contato[]> {
        return await this.parseCsv();
    }

    private parseCsv(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(this._caminhoArquivo);

            const contatos: Contato[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile)

            parseFile.on('data', async (line) => {
                const [nome, telefone, email, dataNascimento] = line;

                contatos.push(new Contato(
                    nome,
                    telefone,
                    email,
                    new Date(dataNascimento)
                ));
            }).on("end", () => {
                resolve(contatos);
            }).on('error', (err) => {
                reject(err)
            });

        });
    }

}

export { ContatoCsvDao }