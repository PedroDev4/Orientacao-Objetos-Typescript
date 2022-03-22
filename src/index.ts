import { ContaBancaria } from './models/ContaBancaria';

const conta1 = new ContaBancaria('12345-6', '0005-4');

conta1.depositar(500.00);
conta1.sacar(50.00);

console.log(`Account: ${conta1.number} - Agency: ${conta1.agency} / Saldo: ${conta1.consultar()}`);