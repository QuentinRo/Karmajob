import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataProvider} from "../provider/data";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-jobs-theme',
  templateUrl: './jobs-theme.page.html',
  styleUrls: ['./jobs-theme.page.scss'],
})
export class JobsThemePage implements OnInit {
  private route: ActivatedRoute;
  public id: number;
  private router: Router;
  private data: DataProvider;
  private toastCtrl: ToastController;

  constructor(router: Router, data: DataProvider, toastCtrl: ToastController, route: ActivatedRoute) {
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.data = data;
    this.route = route;
    this.load();
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

  doRefresh(event) {
    console.log('Begin refresh');
    this.load().then(() => {
      this.toastCtrl.create({ message: 'Rechargé!', duration: 1000 }).then((toastData) => { toastData.present()})
      event.target.complete();
      console.log('Success refresh');
    }).catch(() => {
      this.toastCtrl.create({ message: 'Erreur de connexion!', duration: 1000 }).then((toastData) => { toastData.present()})
      event.target.complete();
      console.log('Failed refresh');
    })
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
