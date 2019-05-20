import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {
  private route: ActivatedRoute;
  public id: number;

  constructor(activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
