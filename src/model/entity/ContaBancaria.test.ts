import { ContaBancaria } from "./ContaBancaria";

describe('Teste das funcionalidades de uma conta bancária', () => {

    test('Deve criar uma conta com número e agência default', () => {
        const conta = new ContaBancaria();

        expect(conta.agency).toBe('0000-0');
        expect(conta.number).toBe('00000-0');
    });

    test('Deve criar uma conta com número e agência especificados', () => {
        const numero: string = '12345-1';
        const agencia: string = '0123-1';

        const conta = new ContaBancaria(numero, agencia);

        expect(conta.number).toEqual(numero);
        expect(conta.agency).toEqual(agencia);
    });

    test('O saldo de uma conta recém criada deve ser zero', () => {
        const conta: ContaBancaria = new ContaBancaria();
        expect(conta.consultar()).toBe(0);
    });

    test('O saldo deve ser alterado corretamente após realizar depósitos', () => {
        const conta: ContaBancaria = new ContaBancaria();

        conta.depositar(25.00);
        conta.depositar(50.00)

        expect(conta.consultar()).toBe(75.00);
    });

    test('O saldo deve ser alterador corretamente após realizar saques', () => {
        const conta: ContaBancaria = new ContaBancaria();

        conta.depositar(100.00);

        conta.sacar(25.50);
        conta.sacar(40.00);

        expect(conta.consultar()).toBe(34.50);
    });

    test('Deve retornar falso para tratativa de erro quando saldo insuficiente', () => {
        const conta: ContaBancaria = new ContaBancaria();

        conta.depositar(75.00);

        const resultado = conta.sacar(100);

        expect(resultado).toBeFalsy();
    });

    test('Deve retornar falso para tratativa de erro quando valor informado no deposito menor ou igual a zero', () => {
        const conta: ContaBancaria = new ContaBancaria();

        const resultado = conta.depositar(0.00);

        expect(resultado).toBeFalsy();
    });
});