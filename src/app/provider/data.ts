
import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {init} from 'protractor/built/launcher';
import {Job} from '../model/Job';

@Injectable()
export class DataProvider {
    private storage: Storage
    public jobs: Job[]
    private apiurl: string = 'http://127.0.0.1:8000/api/ajdqrr'
    public lastUpdateTime: Date
    public lastUpdateSuccess: boolean
    private httpClient: HttpClient

    constructor(storage: Storage, httpClient: HttpClient) {
        this.storage = storage
        this.httpClient = httpClient
        // this.init()
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
                            console.log(this.storage.get('jobs'));
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
                    var f = new Job(value.id, value.title, value.description, value.theme, value.date, value.duration, value.karmapoints, value.owner, value.worker, value.status)
                    console.log(value);
                    this.jobs.push(f)
                    /*
                    public id: number, public title: string, public description: string, public karmapoints: number,
                public date: string, public estimatedtime: string, public owner: number) {
                     */
                })
                console.log('loadFromStorage.resolve');
                resolve('Ok')
            }).catch(() => {
                console.log('marchepas');
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
}










