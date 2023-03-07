/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

import { SleepData } from './sleep-data';

export class StanfordSleepinessData extends SleepData {
	public static ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	private loggedValue:number;

	constructor(loggedValue:number, loggedAt:Date = new Date()) {
		super();
		this.loggedValue = loggedValue;
		this.loggedAt = loggedAt;
	}

	override summaryString():string {
		//return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
		return "" + StanfordSleepinessData.ScaleValues[this.loggedValue];
	}

	getLoggedTime():string {
		return this.loggedAt.toLocaleTimeString();
	}

	getLoggedDate():string {
		let getYear = this.loggedAt.toLocaleString("default", { year: "numeric" });
		let getMonth = this.loggedAt.toLocaleString("default", { month: "2-digit" });
		let getDay = this.loggedAt.toLocaleString("default", { day: "2-digit" });
		return getYear + "-" + getMonth + "-" + getDay;
	}

	getLoggedValue(): number {
		return this.loggedValue;
	}

	
	// // return true if loggedValue is 0 (make scaleValues undefined)
	// isInvalid():boolean {
	// 	if (this.loggedValue === 0)
	// 		return true;
	// 	return false;
	// }
}
