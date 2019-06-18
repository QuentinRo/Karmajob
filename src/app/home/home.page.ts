import { Component } from '@angular/core';
import { Job} from '../model/Job';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {DataProvider} from '../provider/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

  doRefresh(event) {
    console.log('Begin refresh');
    this.load().then(() => {
      this.toastCtrl.create({ message: 'Rechargé!', duration: 1000 }).then((toastData)=>{ toastData.present() })
      event.target.complete();
      console.log('Success refresh');
    }).catch(() => {
      this.toastCtrl.create({ message: 'Erreur de connexion!', duration: 1000 }).then((toastData)=>{ toastData.present() })
      event.target.complete();
      console.log('Failed refresh');
    })
  }
}
