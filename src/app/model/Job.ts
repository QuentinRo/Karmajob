export class Job {
    // tslint:disable-next-line:max-line-length

    constructor(public id: number, public title: string, public description: string, public theme: string,
                public date: string, public duration: number, public karmapoints: number, public image: string,
                public owner: number, public worker: number, public status_id: number, public speed: number, public quality: number, public pleaseant: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.theme = theme
        this.karmapoints = karmapoints;
        this.date = date;
        this.duration = duration;
        this.image = image;
        this.owner = owner;
        this.worker = worker;
        this.status_id = status_id;
        this.speed = speed
        this.quality = quality
        this.pleaseant = pleaseant
    }
    public getTitle() {
        console.log(this.title);
    }

    public addWorker(worker: number) {
    }
}

