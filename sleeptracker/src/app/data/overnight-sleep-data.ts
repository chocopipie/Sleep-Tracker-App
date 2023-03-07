import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	public sleepStart:Date;
	public sleepEnd:Date;

	constructor(sleepStart:Date, sleepEnd:Date) {
		super();
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
	}

	override summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
	}

	getDuration(): number {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + Math.floor(difference_ms / (1000*60) % 60) / 60;
	}

	override dateString():string {
		return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	getStartTime() {
		return this.sleepStart.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
	}

	getEndTime() {
		return this.sleepEnd.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
	}

	getLoggedDate():string {
		let getYear = this.sleepStart.toLocaleString("default", { year: "numeric" });
		let getMonth = this.sleepStart.toLocaleString("default", { month: "2-digit" });
		let getDay = this.sleepStart.toLocaleString("default", { day: "2-digit" });
		return getYear + "-" + getMonth + "-" + getDay;
	}
}
