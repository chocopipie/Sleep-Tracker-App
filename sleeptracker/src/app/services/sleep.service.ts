import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	//public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor(private firestore: Firestore) {}

	// get the collection OvernightSleep
	getOvernightData(): Observable<OvernightSleepData[]> {
		let sleepRef = collection(this.firestore, 'OvernightSleep').withConverter(this.OvernightSleepConverter);
		return collectionData(sleepRef, {idField: 'id'}) as Observable<OvernightSleepData[]>
	}

	// get the collection OvernightSleep
	getSleepinessData(): Observable<StanfordSleepinessData[]> {
		let sleepRef = collection(this.firestore, 'Sleepiness').withConverter(this.SleepinessConverter);
		return collectionData(sleepRef, {idField: 'id'}) as Observable<StanfordSleepinessData[]>
	}

	// add 1 overnight sleep to the collection OvernightSleep
	addOvernightData(overnightSleep: OvernightSleepData) {
		overnightSleep.id = doc(collection(this.firestore, 'id')).id;
		const sleepRef = collection(this.firestore, 'OvernightSleep').withConverter(this.OvernightSleepConverter);
		return addDoc(sleepRef, overnightSleep);
	}

	// add 1 sleepiness to the collection OvernightSleep
	addSleepinessData(sleepiness: StanfordSleepinessData) {
		sleepiness.id = doc(collection(this.firestore, 'id')).id;
		const sleepRef = collection(this.firestore, 'Sleepiness').withConverter(this.SleepinessConverter);
		return addDoc(sleepRef, sleepiness);
	}

	// Firestore data converter
	OvernightSleepConverter =  {
		toFirestore: (overnightSleep: OvernightSleepData) => {
			return {
				loggedAt: overnightSleep.loggedAt,
				sleepStart: overnightSleep.sleepStart,
				sleepEnd: overnightSleep.sleepEnd
			};
		},
		fromFirestore: (snapshot:any, options:any) => {
			const data = snapshot.data(options);
			return new OvernightSleepData(data.sleepStart.toDate(), data.sleepEnd.toDate());
		}
	};

	SleepinessConverter =  {
		toFirestore: (sleepiness: StanfordSleepinessData) => {
			return {
				loggedAt: sleepiness.loggedAt,
				loggedValue: sleepiness.getLoggedValue()
			};
		},
		fromFirestore: (snapshot:any, options:any) => {
			const data = snapshot.data(options);
			return new StanfordSleepinessData(data.loggedValue, data.loggedAt.toDate());
		}
	};
}

/* FAKE DATA
private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}
*/