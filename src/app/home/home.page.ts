import { Component } from '@angular/core';
import { Jobs} from '../model/Jobs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public job: Jobs;
  private router: Router;

  constructor(router: Router) {
  this.job = new Jobs('super', 'supersuper');
  this.router = router;
  console.log(this.job);
  }

  public gotoprofile(){
    this.router.navigate(['profile']);
    // methode Carrel
    // this.router.navigateByUrl('/profile');
  }
}
