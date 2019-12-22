import { ICustomers } from 'DAO/Icustomers';

// tslint:disable-next-line:class-name
export class customers implements ICustomers {
    constructor(public name: string, public address: string) {}
}
