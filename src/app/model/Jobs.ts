import DateTimeFormat = Intl.DateTimeFormat;

export class Jobs {
    constructor(public title: string, public description: string, public date: , public points: bigint, public difficulty: string, ) {
        this.title = title;
        this.description = description;
        this.date = date;
    }
    public getTitle()
    {
        console.log(this.title);
    }
}
