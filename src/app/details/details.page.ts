import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
private route: ActivatedRoute;
public id: number;

  constructor(activatedRoute: ActivatedRoute) {
    this.route = activatedRoute;
  }

  ngOnInit() {
    // on convertit la "string" en numérique (stocker dans l'atribut publique id)
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
