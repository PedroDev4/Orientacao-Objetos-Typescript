export class ContaBancaria {

    // Encapsulando o atributo 'balance' da classe
    private _balance: number;
    private _number: string = '';
    private _agency: string = '';

    constructor(number?: string, agency?: string) {
        this._balance = 0;
        this.number = this._validarNumero(number) ? number : '00000-0';
        this.agency = this._validarAgencia(agency) ? agency : '0000-0';
    }

    // Getters & Setters
    get number(): string {
        return this._number;
    }

    set number(value: string) {
        if (this._validarNumero(value)) {
            this._number = value;
        }
    }

    get agency(): string {
        return this._agency;
    }

    set agency(value: string) {
        if (this._validarAgencia(value)) {
            this._agency = value;
        }
    }

    // Methods
    consultar(): number {
        return this._balance;
    }

    depositar(value: number): boolean {
        if (value > 0) {
            this._balance += value;
            return true;
        }

        return false;
    }

    sacar(value: number): boolean {

        if (value >= 0 && this._balance >= value) {
            this._balance -= value;
            return true;
        }

        return false;
    }

    private _validarNumero(num: string): boolean {
        const regex = /^\d{5}-\d{1}$/;
        if (regex.test(num)) {
            return true;
        }

        return false;
    }

    private _validarAgencia(num: string): boolean {
        const regex = /^\d{4}-\d{1}$/;
        if (regex.test(num)) {
            return true;
        }

        return false;
    }

}