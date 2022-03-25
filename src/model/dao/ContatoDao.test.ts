import { ContatoCsvDao } from "./ContatoCsvDao";
import { ContatoJsonDao } from "./ContatoJsonDao";
import { IContatoDao } from "./interfaces/IContatoDao";


describe('Testa DAOS de contato', () => {

    test('Deve recuperar todos os contatos dos repositórios', async () => {

        let contatoDao: IContatoDao = new ContatoJsonDao();
        let contatos = await contatoDao.recuperarContatos();

        expect(contatos.length).toBe(100);


        contatoDao = new ContatoCsvDao();
        contatos = await contatoDao.recuperarContatos();

        expect(contatos.length).toBe(100);
    });

});