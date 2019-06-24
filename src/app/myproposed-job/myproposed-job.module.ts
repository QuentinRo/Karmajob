import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyproposedJobPage } from './myproposed-job.page';

const routes: Routes = [
  {
    path: '',
    component: MyproposedJobPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyproposedJobPage]
})
export class MyproposedJobPageModule {}
