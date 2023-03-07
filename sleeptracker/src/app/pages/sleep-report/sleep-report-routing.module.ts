import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepReportPage } from './sleep-report.page';

const routes: Routes = [
  {
    path: '',
    component: SleepReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepReportPageRoutingModule {}
