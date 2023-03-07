import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';
import { NavparamService } from 'src/app/navparam.service';
@Component({
  selector: 'app-sleep-card',
  templateUrl: './sleep-card.component.html',
  styleUrls: ['./sleep-card.component.scss'],
})
export class SleepCardComponent implements OnInit {
  @Input() overnightSleep: OvernightSleepData;

  constructor(private router: Router, private navParamService: NavparamService) { }

  ngOnInit() {}

  goToSleepReport() {
    this.navParamService.setNavData(this.overnightSleep);
    this.router.navigateByUrl('/sleep-report')
  }
}
