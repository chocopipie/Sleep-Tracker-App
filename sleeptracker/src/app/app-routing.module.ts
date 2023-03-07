import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./pages/mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'add-sleep',
    loadChildren: () => import('./pages/add-sleep/add-sleep.module').then( m => m.AddSleepPageModule)
  },
  {
    path: 'sleeps',
    loadChildren: () => import('./pages/sleeps/sleeps.module').then( m => m.SleepsPageModule)
  },
  {
    path: 'sleep-report',
    loadChildren: () => import('./pages/sleep-report/sleep-report.module').then( m => m.SleepReportPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
