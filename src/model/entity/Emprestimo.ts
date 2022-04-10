import { Entity } from "../core/Entity";
import { ContaBancaria } from "./ContaBancaria";

type EmprestimoProps = {
    value: number;
    clientAccount: ContaBancaria;
    finalDate: Date;
    createdAt: Date;
}

export class Emprestimo extends Entity<EmprestimoProps> {

    private constructor(props: EmprestimoProps, id?: string) {
        super(props, id);
    }

    static create(props: EmprestimoProps, id: string): Emprestimo {
        const emprestimo = new Emprestimo(
            {
                ...props,
                createdAt: props.createdAt ?? new Date()
            },
            id
        );

        return emprestimo;
    }
}