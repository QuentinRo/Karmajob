import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.page.html',
  styleUrls: ['./jobs-list.page.scss'],
})
export class JobsListPage implements OnInit {
  private route: ActivatedRoute;
  public id: number;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
