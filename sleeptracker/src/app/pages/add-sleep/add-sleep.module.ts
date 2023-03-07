import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSleepPageRoutingModule } from './add-sleep-routing.module';

import { AddSleepPage } from './add-sleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSleepPageRoutingModule
  ],
  declarations: [AddSleepPage]
})
export class AddSleepPageModule {}
