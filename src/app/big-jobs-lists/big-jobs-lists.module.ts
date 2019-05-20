import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BigJobsListsPage } from './big-jobs-lists.page';

const routes: Routes = [
  {
    path: '',
    component: BigJobsListsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BigJobsListsPage]
})
export class BigJobsListsPageModule {}
