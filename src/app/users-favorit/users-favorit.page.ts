import { Component, OnInit } from '@angular/core';
import {Job} from '../model/Job';
import {ActivatedRoute, Router} from '@angular/router';
import {DataProvider} from '../provider/data';
import {ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-users-favorit',
  templateUrl: './users-favorit.page.html',
  styleUrls: ['./users-favorit.page.scss'],
})
export class UsersFavoritPage implements OnInit {
  private route: ActivatedRoute;
  public id: number;
  public job: Job;
  private router: Router;
  private data: DataProvider
  private toastCtrl: ToastController
  // public created: Status;

  constructor(router: Router, data: DataProvider, toastCtrl: ToastController,  route: ActivatedRoute) {
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.data = data;
    this.route = route;
    // this.load();
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

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
