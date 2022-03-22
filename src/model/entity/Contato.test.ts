import { Contato } from "./Contato";

describe('Testa o modelo de Contato', () => {

    test('Deve criar um novo objeto de contato com os atributos validos corretamente', () => {
        const contato = new Contato(
            'Pedro Martins',
            '1-332-820-3431 x3937',
            'Clemmie.OHara@gmail.com',
            new Date('2003-10-13')
        );

        expect(contato.nome).toBe('Pedro Martins');
        expect(contato.email).toBe('Clemmie.OHara@gmail.com');
        expect(contato.telefone).toBe('1-332-820-3431 x3937');
        expect(contato.dataNascimento).toStrictEqual(new Date('2003-10-13'))
    });
});