import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { SleepService } from 'src/app/services/sleep.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sleep',
  templateUrl: './add-sleep.page.html',
  styleUrls: ['./add-sleep.page.scss'],
})
export class AddSleepPage implements OnInit {
  time: string;
  notStart: boolean = true;
  sleeping: boolean;
  overnightSleep: OvernightSleepData;
  sleepTime: Date;
  wakeUpTime: Date;

  constructor(private alertController: AlertController, private router: Router, private sleepService: SleepService) { }

  ngOnInit() {
    const today = new Date();
    this.time = today.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
  }

  startClock() {
    this.notStart = false;
    this.sleeping = true;
    this.sleepTime = new Date();
  }

  endClock() {
    this.sleeping = false;
    this.notStart = true;
    this.wakeUpTime = new Date();
    this.overnightSleep = new OvernightSleepData(this.sleepTime, this.wakeUpTime)
    console.log(this.overnightSleep);
    this.addOvernightSleepToDb(this.overnightSleep);
  }

  addOvernightSleepToDb(overnightSleep: OvernightSleepData) {
    this.sleepService.addOvernightData(overnightSleep).then(async (task) => {
      if(task) {
        // TODO: implement a noti that your sleep is saved
        const alert = await this.alertController.create({
          header: `Added your sleep from ${this.overnightSleep.getStartTime()} to ${this.overnightSleep.getEndTime()}`,
          buttons: [
            {
              text: 'OK',
              role: 'confirm',
              handler: () => {
                this.router.navigate(['mainpage'])
              },
            },
          ],
        });
    
        await alert.present();
    
      }
    })
  }
  
}
