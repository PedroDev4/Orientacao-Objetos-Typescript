import fs from 'fs';
import path from 'path';
import { setLocale, name, phone, internet, date } from 'faker';

setLocale('pt_BR');

const contacts = [];
let linhasCSV = '';

const numerosContatos = 100;
for (let i = 0; i < numerosContatos; i++) {

    const contact = {
        nome: name.findName(),
        telefone: phone.phoneNumber(),
        email: internet.email(),
        dataNascimento: date.past()
    };

    contacts.push(contact);
    const linha = `${contact.nome},${contact.telefone},${contact.email},${contact.dataNascimento}`;

    linhasCSV += linha + '\n';
}

const caminhoDiretorioArquivos = path.join(__dirname, 'data');

const strJson = JSON.stringify(contacts);
const caminhoArquivoJson = path.join(caminhoDiretorioArquivos, 'contatos.json');

fs.writeFileSync(caminhoArquivoJson, strJson);

const caminhoArquivoCSV = path.join(caminhoDiretorioArquivos, 'contatos.csv');
fs.writeFileSync(caminhoArquivoCSV, linhasCSV);

console.log('Arquivos gerados com sucesso.');