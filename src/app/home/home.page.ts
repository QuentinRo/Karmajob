import { Component } from '@angular/core';
import { Jobs} from '../model/Jobs';
import {Router} from '@angular/router';
import {People} from '../model/People';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public job: Jobs;
  private router: Router;
  public today: string;
  public hendrew: People;
  public created: Status;


  constructor(router: Router) {
    // this.hendrew = new People(1,'Hendrew', 'Beneth', 1234, 0,"Ste-croix, 'rue Principale');
    this.hendrew = new People(1, 'Hendrew', 'Beneth', '1234', 0, 'ste-croix', 'ruePrincple');
    // this.created = new Status(1, 'created', 'Just beeing created');
    this.created = new Status(1, 'haha', '223');
    this.job = new Jobs(1, 'Tailler la haie', 'Faire du jardin', 10, 'today', '2h', 1);
    this.router = router;

    console.log(this.hendrew);
    //console.log(this.created);
    console.log(this.job);
  }

  public gotoprofile(){
    this.router.navigate(['profile']);
    // methode Carrel
    // this.router.navigateByUrl('/profile');
  }
}
