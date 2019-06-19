import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataProvider} from '../provider/data';
import {ToastController} from '@ionic/angular';
import {Job} from '../model/Job';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-big-jobs-lists',
  templateUrl: './big-jobs-lists.page.html',
  styleUrls: ['./big-jobs-lists.page.scss'],
})
export class BigJobsListsPage implements OnInit {
private router: Router;
private data: DataProvider;
private toastCtrl: ToastController;

  constructor(router: Router, data: DataProvider, toastCtrl: ToastController) {
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.data = data;
    this.load();
  }

  showDetailsOf(id) {
    this.router.navigateByUrl('/job/' + id);
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
  ngOnInit(): void {

  }


}
