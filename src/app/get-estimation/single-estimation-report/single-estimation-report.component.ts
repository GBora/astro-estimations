import { Component, OnInit, Input } from '@angular/core';
import SimpleEstimationTask from '../../models/task/simple-estimation-task.model';

@Component({
  selector: 'app-single-estimation-report',
  templateUrl: './single-estimation-report.component.html',
  styleUrls: ['./single-estimation-report.component.scss']
})
export class SingleEstimationReportComponent implements OnInit {

  @Input() estimation: SimpleEstimationTask;

  constructor() { }

  ngOnInit() {
  }

}
