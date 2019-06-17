export class Job {
    // tslint:disable-next-line:max-line-length

    protected static SInit = (() => {
        Job.prototype.status = 1;
    })();

    constructor(public id: number, public title: string, public description: string, public theme: string,
                public date: string, public duration: number, public karmapoints: number, public owner: number, public worker: number, public status: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.theme = theme
        this.karmapoints = karmapoints;
        this.date = date;
        this.duration = duration;
        this.owner = owner;
        this.worker = worker;
        this.status = status;
    }
    public getTitle() {
        console.log(this.title);
    }

    public addWorker(worker: number) {
    }
}

