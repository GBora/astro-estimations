import { Component, OnInit, Input } from '@angular/core';
import SimpleEstimationTask from '../../models/task/simple-estimation-task.model';
import SimpleSubTask from '../../models/sub-tasks/simple-sub-task';
import * as _ from 'lodash';

@Component({
  selector: 'app-single-estimation-detail',
  templateUrl: './single-estimation-detail.component.html',
  styleUrls: ['./single-estimation-detail.component.scss']
})
export class SingleEstimationDetailComponent implements OnInit {

  @Input() estimation: SimpleEstimationTask;
  addingSubtask = false;
  newSubTask: SimpleSubTask = null;
  showDetails = false;

  constructor() { }

  ngOnInit() {
  }

  switchDetails() {
    this.showDetails = !this.showDetails;
  }

  addSubtask() {
    this.newSubTask =  new SimpleSubTask();
    this.addingSubtask = true;
  }

  insertNewSubTask() {
    this.estimation.subtasks.push(_.cloneDeep(this.newSubTask));
    this.newSubTask = null;
    this.addingSubtask = false;
    this.estimation.updateHours();
  }

}
