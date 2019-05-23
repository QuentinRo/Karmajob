import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-big-jobs-lists',
  templateUrl: './big-jobs-lists.page.html',
  styleUrls: ['./big-jobs-lists.page.scss'],
})
export class BigJobsListsPage implements OnInit {
private routeur: Router;

  constructor(router: Router) {
    this.routeur = router;
  }

  ngOnInit() {
  }

}
