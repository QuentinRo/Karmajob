
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
    private apiurl: string = 'http://127.0.0.1:8000/api/ajdqrr'
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
            this.users = []
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
            ),
            this.httpClient.get(this.apiurl + '/users').subscribe(
                data => { // API is responding, save the datas into statuses
                    this.storage.set('users', data).then(() => {
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
            this.users = []
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
            }),
            this.storage.get('users').then((data) => {
                data.data.forEach((value) => {
                    //   var j = new Job(value.id, value.title, value.description, value.theme, value.date, value.karmapoints, value.owner, value.worker, value.status_id)
                    var u = new User(value.id, value.names)
                    this.users.push(u)
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

    // Get(id) -----------------------------------------------------------------------------
    public getJob(id) {
        return new Promise<any>((resolve, reject) => {
            this.jobs.forEach((job) => {
                if (job.id === id) resolve(job)
            })
            reject('Job #' + id + ' not found')
        })
    }

    public getUser(id): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.users.forEach((user) => {
                if (user.id === id) resolve(user)
            })
            reject('User #' + id + ' not found')
        })
    }

    public getStatus(id): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.statuses.forEach((status) => {
                if (status.id == id) resolve(status)
            })
            reject('Status #' + id + ' not found')
        })
    }

    public updateItemOnBackend(id): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.getJob(id).then((job) => {
                this.httpClient
                    .put(this.apiurl + '/jobs/' + id, job).subscribe(
                    data => {
                        resolve('Ok')
                    },
                    err => {
                        reject('API call failed')
                    }
                );
            });
        });
    }

// status --------------------------------------------------------------------------------------------------------


    public init() { // Initialize storage with hardcoded data

        this.statuses = []
        let s = new Status(1, 'Ouvert')
        this.statuses.push(s)
        s = new Status(2, 'Pris')
        this.statuses.push(s)
        s = new Status(3, 'Accepté')
        this.statuses.push(s)
        s = new Status(4, 'Abandonné')
        this.statuses.push(s)
        s = new Status(5, 'Fait')
        this.statuses.push(s)
        s = new Status(6, 'Validé')
        this.statuses.push(s)
        s = new Status(7, 'Baclé')
        this.statuses.push(s)
        this.storage.set('statuses', {data: this.statuses})

        /*
        this.users = []
        let u = new User(1, 'kent1')
        this.users.push(u)
        u = new User(2, 'alex')
        this.users.push(u)
        u = new User(3, 'jerem')
        this.users.push(u)
        u = new User(4, 'kent2')
        this.users.push(u)
        u = new User(5, 'Blep')
        this.users.push(u)
        u = new User(6, 'Lara')
        this.users.push(u)
        this.storage.set('users', {data: this.users})
        */
        this.themes = []
        let t = new Theme(1, 'Jardinage')
        this.themes.push(t);
        t = new Theme(2, 'Rénovation');
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










