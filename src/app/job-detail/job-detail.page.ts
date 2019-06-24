import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataProvider} from '../provider/data';
import {ActionSheetController, ToastController} from '@ionic/angular';
import {Job} from '../model/Job';
import {Storage} from '@ionic/storage';
import {jobs} from '@angular-devkit/core/node/experimental';
import {computeStackId} from '@ionic/angular/dist/directives/navigation/stack-utils';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {
  private route: ActivatedRoute;
  public id: number;
  private router: Router;
  private data: DataProvider;
  private toastCtrl: ToastController;

  storage: Storage
  speed: number;
  quality: number;
  pleasante: number;
  idd: number;

  constructor(public actionSheetController: ActionSheetController, router: Router, data: DataProvider, toastCtrl: ToastController, route: ActivatedRoute, storage: Storage) {
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.data = data;
    this.route = route;
    this.storage = storage;
    // this.load();
  }

  private load(): Promise<string> {
    return new Promise<string> ((resolve, reject) => {
      this.data.loadFromAPI().then(() => {
        this.data.loadFromStorage().then(() => {
          console.log('load.resolve');
          resolve('Ok');
        });
      }).catch(() => {
        this.data.loadFromStorage();
        console.log('load.reject');
        reject('Ko');
      });
    });
  }

  public deletejob() {
    this.storage.get('jobs').then((job) => {
      job.data.splice(this.data.jobs[this.id - 1].id, 1);   // i don't know what is index refer to
      this.storage.set('jobs', job)
      console.log('suppr');
    });
  }

  public addStars() {
    // the ID is hardcoded, for test purpose
    var s = new Job( this.data.jobs[this.id - 1].id, this.data.jobs[this.id - 1].title, this.data.jobs[this.id - 1].description, this.data.jobs[this.id - 1].theme , this.data.jobs[this.id - 1].date,
        this.data.jobs[this.id - 1].duration, this.data.jobs[this.id - 1].karmapoints, this.data.jobs[this.id - 1].image,
        this.data.jobs[this.id - 1].owner, this.data.jobs[this.id - 1].worker,
        this.data.jobs[this.id - 1].status_id, this.speed, this.quality, this.pleasante);
    // this.storage.remove('jobs')
    // this.data.jobs[this.id - 1].splice(this.data.jobs[this.id - 1].id)
    // this.storage.remove(`jobs:${ this.data.jobs[this.id - 1].title }`);


    this.data.jobs.push(s)
    this.storage.set('jobs', {data: this.data.jobs} )

    // Not working with the push
    // this.deletejob();

    // valeur à Zero
    this.speed = null
    this.quality = null
    this.pleasante = null


    /*
      this.storage.get('jobs').then((jobs) => {
      jobs.splice( 0, 1);   // i don't know what is index refer to
      this.storage.set('jobs', jobs);
      console.log('delet')
    });
     */


    /*
    storage.get('note').then((note) => {
    note.splice(index, 1);   // i don't know what is index refer to
    storage.set('note', note);
  });
     */

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
