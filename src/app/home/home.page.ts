import { Component } from '@angular/core';
import { Jobs} from '../model/Jobs';
import {Router} from '@angular/router';
import {Users} from '../model/Users';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public job: Jobs;
  private router: Router;
  public today: string;
  public users: Users[];
  public hendrew: Users;
 // public created: Status;


  constructor(router: Router, public storage: Storage) {
    /*
    this.flowers = []
    let f = new Flower(1, ['Ianthis', 'Violette'])
    f.size = 12
    this.flowers.push(f)
    */

    this.users = [];
    let u = new Users(1, 'Hendrew', 'Beneth', '1234', 0, 'ste-croix', 'ruePrincple');
    this.users.push(u);

    let u = new Users(2, 'Joseph', 'Joestar', '1234', 0, 'Moon', 'Cratère 5');
    this.users.push(u);


    // this.hendrew = new People(1,'Hendrew', 'Beneth', 1234, 0,"Ste-croix, 'rue Principale');
    // this.users = new Users(1, 'Hendrew', 'Beneth', '1234', 0, 'ste-croix', 'ruePrincple');
    // this.hendrew = new Users(2, 'Joseph', 'Joestar', '1234', 0, 'Moon', 'Cratère 5');
    // this.created = new Status(1, 'created', 'Just beeing created');
   // this.created = new Status(1, 'haha', '223');
    this.job = new Jobs(1, 'Tailler la haie', 'Faire du jardin', 10, 'today', '2h', 1);
    // this.job = new Jobs(2, 'Tondre le gazon', 'Faire du jardin', 10, 'tomorow', '2h', 2);
    this.storage.set('users', this.users);
    this.router = router;

    console.log(this.users);
    // console.log(this.created);
    console.log(this.job);
  }

  public gotoprofile(){
    this.router.navigate(['profile']);
    // methode Carrel
    // this.router.navigateByUrl('/profile');
  }
}
