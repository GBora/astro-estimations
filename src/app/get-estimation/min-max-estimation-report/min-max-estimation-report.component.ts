import { Component, OnInit, Input } from '@angular/core';
import MinMaxEstimationTask from '../../models/task/min-max-estimation-task.model';

@Component({
  selector: 'app-min-max-estimation-report',
  templateUrl: './min-max-estimation-report.component.html',
  styleUrls: ['./min-max-estimation-report.component.scss']
})
export class MinMaxEstimationReportComponent implements OnInit {

  @Input() estimation: MinMaxEstimationTask;

  constructor() { }

  ngOnInit() {
  }

}
