import { ContatoCsvDao } from './model/dao/ContatoCsvDao';
import { ContaBancaria } from './model/entity/ContaBancaria';

const conta1 = new ContaBancaria('12345-6', '0005-4');
const contatosCsvDAO = new ContatoCsvDao().recuperarContatos();

conta1.depositar(500.00);
conta1.sacar(50.00);

// console.log(`Account: ${conta1.number} - Agency: ${conta1.agency} / Saldo: ${conta1.consultar()}`);

contatosCsvDAO.then(data => console.log(data));