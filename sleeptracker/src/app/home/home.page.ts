import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
  constructor(public sleepService:SleepService, private router: Router) {}

	ngOnInit() {
		this.sleepService.getOvernightData().subscribe(res => console.log(res))
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	/*get allSleepData() {
		return SleepService.AllSleepData;
	}*/

	goToMain() {
		this.router.navigate(['mainpage'])
	}


}
