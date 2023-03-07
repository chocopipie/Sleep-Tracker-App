import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepReportPageRoutingModule } from './sleep-report-routing.module';

import { SleepReportPage } from './sleep-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepReportPageRoutingModule
  ],
  declarations: [SleepReportPage]
})
export class SleepReportPageModule {}
