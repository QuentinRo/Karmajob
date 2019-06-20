import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'provider', loadChildren: './provider/provider.module#ProviderPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'big-jobs-lists', loadChildren: './big-jobs-lists/big-jobs-lists.module#BigJobsListsPageModule' },
  { path: 'job/:id', loadChildren: './job/job.module#JobPageModule' },
  { path: 'mine/:id', loadChildren: './mine/mine.module#MinePageModule' },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'jobs-theme/:id', loadChildren: './jobs-theme/jobs-theme.module#JobsThemePageModule' },
  { path: 'job-detail/:id', loadChildren: './job-detail/job-detail.module#JobDetailPageModule' },  { path: 'job-create', loadChildren: './job-create/job-create.module#JobCreatePageModule' },
  { path: 'options', loadChildren: './options/options.module#OptionsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
