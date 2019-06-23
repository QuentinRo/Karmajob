import { Component, OnInit } from '@angular/core';
import {Job} from "../model/Job";
import {Router} from "@angular/router";
import {DataProvider} from "../provider/data";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public job: Job;
  private router: Router;
  private data: DataProvider
  private toastCtrl: ToastController
  // public created: Status;

  constructor(router: Router, data: DataProvider, toastCtrl: ToastController) {
    this.toastCtrl = toastCtrl
    this.router = router
    this.data = data
    this.load()
  }

  showDetailsOf(id) {
    this.router.navigateByUrl('/job/' + id)
  }

  private load(): Promise<string> {
    return new Promise<string> ((resolve, reject) => {
      this.data.loadFromAPI().then(() => {
        this.data.loadFromStorage().then(() => {
          console.log('load.resolve');
          resolve('Ok')
        })
      }).catch(() => {
        this.data.loadFromStorage()
        console.log('load.reject');
        reject('Ko')
      })
    })
  }
}
