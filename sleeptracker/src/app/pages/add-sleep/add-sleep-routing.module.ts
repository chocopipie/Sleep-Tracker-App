import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSleepPage } from './add-sleep.page';

const routes: Routes = [
  {
    path: '',
    component: AddSleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSleepPageRoutingModule {}
