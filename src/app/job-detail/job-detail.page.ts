import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataProvider} from '../provider/data';
import {ActionSheetController, ToastController} from '@ionic/angular';

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

  constructor(public actionSheetController: ActionSheetController, router: Router, data: DataProvider, toastCtrl: ToastController, route: ActivatedRoute) {
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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
