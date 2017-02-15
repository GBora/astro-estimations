import { Component, OnInit, Input } from '@angular/core';
import MinMaxEstimationTask from '../../models/task/min-max-estimation-task.model';
import MinMaxSubTask from '../../models/sub-tasks/min-max-subtask.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-min-max-estimation-detail',
  templateUrl: './min-max-estimation-detail.component.html',
  styleUrls: ['./min-max-estimation-detail.component.scss']
})
export class MinMaxEstimationDetailComponent implements OnInit {

  @Input() estimation: MinMaxEstimationTask;

  addingSubtask = false;
  newSubTask: MinMaxSubTask = null;
  showDetails = false;

  constructor() { }

  switchDetails() {
    this.showDetails = !this.showDetails;
  }

  addSubtask() {
    this.newSubTask =  new MinMaxSubTask();
    this.addingSubtask = true;
  }

  updateHours() {
    this.estimation.min_hours = 0;
    this.estimation.max_hours = 0;
    this.estimation.subtasks.forEach((st) => {
        this.estimation.min_hours += st.min;
        this.estimation.max_hours += st.max;
    });
  }

  insertNewSubTask() {
    this.estimation.subtasks.push(_.cloneDeep(this.newSubTask));
    this.newSubTask = null;
    this.addingSubtask = false;
    this.updateHours();
  }

  ngOnInit() {
  }

}
