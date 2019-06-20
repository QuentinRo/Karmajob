
import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {init} from 'protractor/built/launcher';
import {Job} from '../model/Job';
import {User} from '../model/User';
import {Status} from '../model/Status';
import {Theme} from '../model/Theme';

@Injectable()
export class DataProvider {
    private storage: Storage
    public jobs: Job[];
    public users: User[];
    public statuses: Status[];
    public themes: Theme[];
    private apiurl: string = 'http://127.0.0.1:8000/api/ajddqrr'
    public lastUpdateTime: Date
    public lastUpdateSuccess: boolean
    private httpClient: HttpClient

    constructor(storage: Storage, httpClient: HttpClient) {
        this.storage = storage
        this.httpClient = httpClient
        this.init()
        this.jobs = []
        this.lastUpdateTime = null
        this.lastUpdateSuccess = false
    }

    public loadFromAPI(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.jobs = []
            this.httpClient.get(this.apiurl + '/jobs').subscribe(
                data => { // API is responding, let's do it
                    console.log(data)
                    this.storage.set('jobs', data).then(() => {
                        this.lastUpdateSuccess = true
                        this.lastUpdateTime = new Date()
                        this.storage.set('lastUpdateTime', this.lastUpdateTime).then(() => {
                            console.log('data from API stored')
                            resolve('Ok')
                        })
                    })
                },
                err => {
                    this.storage.get('lastUpdateTime').then((value) => {
                        this.lastUpdateTime = value
                    })
                    this.lastUpdateSuccess = false
                    console.log('Load from API failed with error ' + err.message)
                    reject('API call failed')
                }
            )
        })
    }

    // Convert the json format stored in storage to array of Flower objects
    public loadFromStorage(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.jobs = []
            console.log('loadFromStorage')
            this.storage.get('jobs').then((data) => {
                data.data.forEach((value) => {
                    //   var j = new Job(value.id, value.title, value.description, value.theme, value.date, value.karmapoints, value.owner, value.worker, value.status_id)
                    var f = new Job(value.id, value.title, value.description, value.theme, value.date, value.duration, value.karmapoints, value.image,  value.owner, value.worker, value.status_id)
                    this.jobs.push(f)
                    /*
                    public id: number, public title: string, public description: string, public karmapoints: number,
                public date: string, public estimatedtime: string, public owner: number) {
                     */
                })
                console.log('loadFromStorage.resolve');
                resolve('Ok')
            }).catch(() => {
                console.log('loadFromStorage.reject');
                reject('Ko')
            })
        })
    }

    public find(id) {
        return new Promise<any>((resolve, reject) => {
            this.jobs.forEach((job) => {
                if (job.id == id) resolve(job)
            })
            reject('Job #' + id + ' not found')
        })
    }

    public updateItemOnBackend(id): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.find(id).then((job) => {
                this.httpClient
                    .put(this.apiurl + '/jobs/' + id, job).subscribe(
                    data => {
                        resolve('Ok')
                    },
                    err => {
                        reject('API call failed')
                    }
                )
            })
        })
    }
    public init() { // Initialize storage with hardcoded data
        this.jobs = []
        // tslint:disable-next-line:max-line-length
        let j = new Job(1, 'Tondre le gazon', 'Mon gazon est trop long et il me faudrait quelqu\'un pour le tondre', 'Jardinage', '21/06/2019 14:00', 2.5, 150, 'https://img.mobiscroll.com/demos/card_3.png', 1, 2, 1)
        this.jobs.push(j)
        // tslint:disable-next-line:max-line-length
        j = new Job(2, 'Laver la piscine', 'Il y à des cailloux au fond de ma piscine', 'Menage', '30/06/2019 16:00', 4, 200, 'https://img.mobiscroll.com/demos/card_3.png', 4, 2, 3)
        this.jobs.push(j)
        // tslint:disable-next-line:max-line-length
        j = new Job(3, 'Réparer ma voiture', 'Ma bougie d\'allumage à quelques problèmes', 'Réparation', '19/06/2019 16:00', 9, 800, 'https://img.mobiscroll.com/demos/card_3.png', 5, 3, 5)
        this.jobs.push(j)
        // tslint:disable-next-line:max-line-length
        j = new Job(4, 'Arroser les plantes', 'Je pards en vacances et mes plantes risquent de ne pas supporter tout l\'été' , 'Jardinage', '07/07/2019 08:00', 1, 50, 'https://img.mobiscroll.com/demos/card_3.png', 2, 6, 4)
        this.jobs.push(j)
        this.storage.set('jobs', {data: this.jobs})

        this.statuses = []
        let s = new Status(1, 'Ouvert', 'Open to be taken')
        this.statuses.push(s)
        s = new Status(2, 'Pris', 'taken, waiting to be accepted')
        this.statuses.push(s)
        s = new Status(3, 'Accepté', 'wait for the job to be done')
        this.statuses.push(s)
        s = new Status(4, 'Abandonné', 'never done')
        this.statuses.push(s)
        s = new Status(5, 'Fait', 'done well')
        this.statuses.push(s)
        s = new Status(6, 'Validé', 'job done and accepted')
        this.statuses.push(s)
        s = new Status(7, 'Baclé', 'bad work')
        this.statuses.push(s)
        this.storage.set('statuses', {data: this.statuses})

        this.users = []
        let u = new User(1, 'kent1', 'rossier', '1234', 'Rue du patissier')
        this.users.push(u)
        u = new User(2, 'alex', 'junod', '1234', 'Rue du centre')
        this.users.push(u)
        u = new User(3, 'jerem', 'gfel', '1234', 'Rue centrale')
        this.users.push(u)
        u = new User(4, 'kent2', 'ros2', '1234', 'Avenue du parc')
        this.users.push(u)
        u = new User(5, 'Blep', 'Bloup', '1234', 'Rue de chevallet')
        this.users.push(u)
        u = new User(6, 'Lara', 'croft', '1234', 'les autins')
        this.users.push(u)
        this.storage.set('users', {data: this.users})

        this.themes = []
        let t = new Theme(1,'Jardinage')
        this.themes.push(t);
        t = new Theme(2,'Rénovation');
        this.themes.push(t);
        this.storage.set('themes', {data: this.themes});
    }

    /*
    public getthemes() {
        console.log('c\'est les data de bigjoblist ! ');
        this.themes = [];
        return new Promise<any>((resolve, reject) => {
            this.jobs.forEach((job) => {
                let t = new Theme(job.theme);
                this.themes.push(t);
                if (this.themes.includes(t)) resolve(this.themes)
            })
            reject(this.themes + 'have been stored')
        })
    }
*/
    /*
       public find(id) {

           return new Promise<any>((resolve, reject) => {

               this.jobs.forEach((job) => {
                   if (job.id == id) resolve(job)
               })
               reject('Job #' + id + ' not found')
           })
       }
       */


}










