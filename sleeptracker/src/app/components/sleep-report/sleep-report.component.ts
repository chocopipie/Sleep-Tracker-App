import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep-report',
  templateUrl: './sleep-report.component.html',
  styleUrls: ['./sleep-report.component.scss'],
})
export class SleepReportComponent implements OnInit {
  @Input() sleepTime: string;
  constructor() { }

  ngOnInit() {}

}
