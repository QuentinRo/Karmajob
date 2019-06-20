import {last} from 'rxjs/operators';

export class User {
    constructor(public id: number, public firstname: string) {
        this.id = id;
        this.firstname = firstname;
    }

}

