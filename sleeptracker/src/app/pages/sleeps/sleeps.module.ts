import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepsPageRoutingModule } from './sleeps-routing.module';

import { SleepsPage } from './sleeps.page';
import { SleepCardComponent } from 'src/app/components/sleep-card/sleep-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepsPageRoutingModule
  ],
  declarations: [SleepsPage, SleepCardComponent]
})
export class SleepsPageModule {}
