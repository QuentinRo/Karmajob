
import {Jobs} from '../app/model/Jobs';
import {init} from 'protractor/built/launcher';

export class DataProvider {

    public jobs: Jobs[]

    constructor(jobs: Jobs[]) {
        this.jobs = jobs;
        // init();
    }


    public init() { // hardcodded data
        job = new Jobs('hokey', 'Faire du hokey', 1, 'tomoworw', '10h');
        this.jobs.push(job);
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
