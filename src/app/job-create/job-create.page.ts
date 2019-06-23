import { Component, OnInit } from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {Job} from '../model/Job';
import {load} from '@angular/core/src/render3';
import {ActionSheetController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {DataProvider} from '../provider/data';
import {Storage} from '@ionic/storage';
import {async} from 'q';
@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.page.html',
  styleUrls: ['./job-create.page.scss'],
})
export class JobCreatePage implements OnInit {
  private route: ActivatedRoute;
  public id: number;
  private router: Router;
  private data: DataProvider;
  private toastCtrl: ToastController;
  private job: Job[];

  storage: Storage
  image: any = '';
  name: string;
  description: string;
  theme: string;
  date: string;
  duration: number;
  karmapoints: number;

  constructor(private camera: Camera, public actionSheetController: ActionSheetController, router: Router, data: DataProvider, toastCtrl: ToastController, route: ActivatedRoute, storage: Storage) {
    this.camera = camera;
    this.toastCtrl = toastCtrl;
    this.router = router;
    this.data = data;
    this.route = route;
    this.storage = storage;
    this.job = []
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

  startCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = (<any> window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      alert('error ' + JSON.stringify(err))
    });
  }

  public addJob() {
    var j = new Job( 3, this.name, this.description, this.theme , this.date, this.duration, this.karmapoints, this.image , 2 , 0 , 1);
    this.data.jobs.push(j)
    console.log(this.data.jobs);
    this.storage.set('jobs', {data: this.data.jobs} )
    console.log(this.storage.get('jobs'));

    // valeur à Zero
    this.image = ''
    this.name = null
    this.description = null
    this.theme = null
    this.date = null
    this.duration = null
    this.karmapoints = null
    this.image = null

  }

  /*

  public addNewRecipe(){
    var r = new Recipe(this.id,this.name,this.image,this.kcal,this.time)
    this.recipes.push(r)
    this.storage.set('myRecipes',this.recipes)
    this.id++
    console.log("Added a new recipe")
    this.router.navigateByUrl('home')
  }
   */
  ngOnInit() {
  }
}


