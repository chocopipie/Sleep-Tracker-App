import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';
import { SleepService } from 'src/app/services/sleep.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {
  // push to array everytime user clicks "save" to add a sleepiness
  sleepinessArray: StanfordSleepinessData[] = [];
  currentSleepiness: StanfordSleepinessData = new StanfordSleepinessData(0, new Date());
  currentTime: Date;
  sleepinessOpions = [
	'feeling active, vital, alert, or wide awake', //1
	'functioning at high levels, but not at peak', //2
	'awake, but relaxed; not fully alert', //3
	'somewhat foggy, let down', //4
	'foggy; losing interest in remaining awake', //5
	'sleepy, woozy, fighting sleep', //6
	'no longer fighting sleep, sleep onset']; //7
  activeIndex: number; // index of button being clicked
  constructor(private alertController: AlertController, private toastController: ToastController, private router: Router, private sleepService:SleepService) { }

  ngOnInit() {
  }

  goToSleeps() {
    this.router.navigate(['sleeps'])
  }

  goToAddSleep() {
    this.router.navigate(['add-sleep'])
  }


  createSleepiness(buttonNum: number) {
    this.activeIndex = buttonNum
    this.currentTime = new Date();
    this.currentSleepiness = new StanfordSleepinessData(buttonNum, this.currentTime)
    //console.log(this.currentSleepiness)
  }

  // add the sleepiness level to the array
  async saveSleepiness() {
    if (this.currentSleepiness.getLoggedValue() !== 0) {
      // add to db
      this.addSleepinessToDb(this.currentSleepiness)
      // push to array
      this.sleepinessArray.push(this.currentSleepiness);
      this.currentSleepiness = new StanfordSleepinessData(0, new Date())
      console.log(this.sleepinessArray)
    }
    else {
      // alert when user clicks save but not choose option yet
      const alert = await this.alertController.create({
        message: 'Please choose an option',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }

  addSleepinessToDb(sleepiness: StanfordSleepinessData) {
    this.sleepService.addSleepinessData(sleepiness).then(async (task) => {
      if (task) {
        const toast = await this.toastController.create({
          message: 'Added your state',
          duration: 1500,
          position: 'top'
        });
    
        await toast.present();
      }
    })
  }
}
