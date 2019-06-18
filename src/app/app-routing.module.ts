import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'provider', loadChildren: './provider/provider.module#ProviderPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'big-jobs-lists', loadChildren: './big-jobs-lists/big-jobs-lists.module#BigJobsListsPageModule' },
  { path: 'jobs-list/:id', loadChildren: './jobs-list/jobs-list.module#JobsListPageModule' },
  { path: 'job/:id', loadChildren: './job/job.module#JobPageModule' },
  { path: 'mine/:id', loadChildren: './mine/mine.module#MinePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
