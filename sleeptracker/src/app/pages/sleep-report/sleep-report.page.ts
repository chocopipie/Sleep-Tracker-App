import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';
import { Chart } from 'chart.js';
import { NavparamService } from 'src/app/navparam.service';
import { SleepService } from 'src/app/services/sleep.service';
@Component({
  selector: 'app-sleep-report',
  templateUrl: './sleep-report.page.html',
  styleUrls: ['./sleep-report.page.scss'],
})
export class SleepReportPage implements OnInit {
  overnightSleep: OvernightSleepData;
  sleepiness: StanfordSleepinessData[] = [];
  sleepinessOfDay: StanfordSleepinessData[] = [];
  sleepDuration: number; // for chart
  remainingDuration: number; // for chart

  @ViewChild('doughnutCanvas', {static: true}) doughnutCanvas: ElementRef;

  doughnutChart: any;

  constructor(private navParamService: NavparamService, private sleepService: SleepService) {
  }

  ionViewWillEnter() {
    this.doughnutChartMethod()
  }

  ngOnInit() {
    // get overnightSleep from passed data from a single sleep-card in sleeps page (use NavpParamservice)
    this.overnightSleep = this.navParamService.getNavData()

    this.sleepDuration = this.overnightSleep.getDuration();
    /*this.sleepiness.push(new StanfordSleepinessData(1, new Date()))
    this.sleepiness.push(new StanfordSleepinessData(5, new Date()))
    this.sleepiness.push(new StanfordSleepinessData(2, new Date()))
    this.sleepiness.push(new StanfordSleepinessData(7, new Date()))*/
    if (this.sleepDuration <= 8)
      this.remainingDuration = 8 - this.sleepDuration
    else
      this.remainingDuration = 0

    // get the array of sleepiness from the database
    this.sleepService.getSleepinessData().subscribe((res: StanfordSleepinessData[]) => {
      this.sleepiness = res; 
      
      this.sleepinessOfDay = this.sleepiness.filter(sleep => 
        sleep.getLoggedDate() === this.overnightSleep.getLoggedDate()
      )
    })

    //console.log(this.overnightSleep.getLoggedDate())

  }


  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: [
          'Hours slept',
          'Hours Needed'
        ],
        datasets: [{
          data: [this.sleepDuration, this.remainingDuration],
          backgroundColor: [
            '#606c38',
            '#e63946'
          ],
          hoverOffset: 4
        }]      
      }
    })
  }

}

//goal: overnight sleep obj will be passed from sleeps.
// use overnightSleep to store that info
// filter out the sleepiness array for the sleepiness inputed at the same START TIME of the overnightsleep obj
