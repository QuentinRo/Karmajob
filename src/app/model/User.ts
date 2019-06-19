import {last} from 'rxjs/operators';

export class User {
    constructor(public id: number, public firstname: string, public lastname: string, public password: string, public address: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.address = address;
    }

}

