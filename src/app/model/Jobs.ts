export class Jobs {
    // tslint:disable-next-line:max-line-length
    public worker: number;
    protected status: number;

    protected static SInit = (() => {
        Jobs.prototype.status = 1;
    })();

    constructor(public id: number, public title: string, public description: string, public karmapoints: number,
                public date: string, public estimatedtime: string, public owner: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.karmapoints = karmapoints;
        this.date = date;
        this.estimatedtime = estimatedtime;
        this.owner = owner;
    }
    public getTitle() {
        console.log(this.title);
    }

    public addWorker(worker: number) {
    }
}
