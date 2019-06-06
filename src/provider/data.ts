
import {Jobs} from '../app/model/Jobs';
import {Storage} from '@ionic/storage';
import {init} from 'protractor/built/launcher';

export class DataProvider {
    private storage: Storage
    public jobs: Jobs[]

    constructor(jobs: Jobs[], storage: Storage) {
        this.storage = storage;
        this.jobs = jobs;
        // init();
        /*
         this.storage = storage
        this.httpClient = httpClient
        //this.init()
        this.flowers = []
        this.lastUpdateTime = null
        this.lastUpdateSuccess = false
         */
    }


    public init() { // hardcodded dat
        this.jobs = new Jobs(1, 'Faire du hokey', 'jouer au hockey au but', 10, '10h', '2h', 1);
        this.jobs.push(job);
        this.storage.set('jobs', this.jobs);
        //this.storage.set('flowers', this.flowers)
    }

    public store() {
        // this.storage.set('Works', 'this.jobs');
        // this.storage.set('Works', this.jobs);
    }
}
    /*
    public store(){
        //this.storage.set('flowers', this.flowers);

        //this.data.store()
        //popatoast ???
    }
    public load(){

    }

    public reload(){

    }


    public init {
    // this.flowers[]
    // let f = new Flower()
}

init()
{

}



} */
