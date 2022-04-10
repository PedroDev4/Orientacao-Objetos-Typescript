import { Contato } from "../entity/Contato";
import fs from 'fs';
import csvParse from 'csv-parse';
import { ContatoDAO } from "../core/ContatoDAO";

class ContatoCsvDao extends ContatoDAO {

    constructor() {
        super('contatos.csv');
    }

    async recuperarContatos(): Promise<Contato[]> {
        return await this.parseCsv();
    }

    private parseCsv(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(this.caminhoArquivo);

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