import crypto from 'crypto';

export class Entity<T> {
    protected _id: string;
    public _props: T;

    constructor(props: T, id?: string) {
        this._id = id ?? crypto.randomUUID();
        this._props = props;
    }

    get id() {
        return this._id;
    }
}