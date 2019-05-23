import {last} from 'rxjs/operators';

export class People {
    constructor(public id: number, public firstname: string, public lastname: string, protected password: string,
                public karmapoints: number, public city: string, public address: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.karmapoints = karmapoints;
        this.city = city;
        this.address = address;
    }


}

