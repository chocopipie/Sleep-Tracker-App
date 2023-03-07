import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { SleepService } from 'src/app/services/sleep.service';

@Component({
  selector: 'app-sleeps',
  templateUrl: './sleeps.page.html',
  styleUrls: ['./sleeps.page.scss'],
})
export class SleepsPage implements OnInit {

  overnightSleepArray: OvernightSleepData[] = [];

  constructor(private sleepService: SleepService) { }

  ngOnInit() {
    // temp. hard coded date, will change
    /*this.overnightSleepArray.push(new OvernightSleepData(new Date("2023-03-01T20:57:00"), new Date()))
    this.overnightSleepArray.push(new OvernightSleepData(new Date("2023-03-02T20:57:00"), new Date()))
    this.overnightSleepArray.push(new OvernightSleepData(new Date("2023-03-02T23:57:00"), new Date()))
    for (let i of this.overnightSleepArray) 
        console.log(i)*/
    this.sleepService.getOvernightData().subscribe((res: OvernightSleepData[]) => {
      this.overnightSleepArray = res; 
      //console.log(this.overnightSleepArray)
    })
  }
}
