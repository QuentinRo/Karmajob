import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataProvider} from '../provider/data';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {
  private route: ActivatedRoute;
  public id: number;
  private router: Router;
  private data: DataProvider;
  private toastCtrl: ToastController;

  constructor(router: Router, data: DataProvider, toastCtrl: ToastController, route: ActivatedRoute) {
    this.toastCtrl = toastCtrl
    this.router = router
    this.route = route
    this.data = data
    // this.load()
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
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
