import { Component, OnInit, Input } from '@angular/core';
import MinMaxEstimationTask from '../../models/task/min-max-estimation-task.model';
import MinMaxSubTask from '../../models/sub-tasks/min-max-subtask.model';
import * as _ from 'lodash';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-min-max-estimation-detail',
  templateUrl: './min-max-estimation-detail.component.html',
  styleUrls: ['./min-max-estimation-detail.component.scss']
})
export class MinMaxEstimationDetailComponent implements OnInit {

  @Input() estimation: MinMaxEstimationTask;

  addingSubtask = false;
  addingQuestion = false;
  addingPossible = false;
  newSubTask: MinMaxSubTask = null;
  newPossible: MinMaxSubTask = null;
  newQuestion: string = null;
  showDetails = false;
  @Input() current_ip: string;

  constructor() { }

  switchDetails() {
    this.showDetails = !this.showDetails;
  }

  addSubtask() {
    this.newSubTask =  new MinMaxSubTask();
    this.newSubTask.subtask_id = UUID.UUID();
    this.addingSubtask = true;
  }

  editSubtask(id: string) {
    let taskToEdit = _.remove(this.estimation.subtasks, (st) => {
      return st.subtask_id === id;
    });
    this.newSubTask = taskToEdit[0];
    this.addingSubtask = true;
  }

  deleteSubtask(id: string) {
    let taskToEdit = _.remove(this.estimation.subtasks, (st) => {
      return st.subtask_id === id;
    });
    this.updateHours();
  }

  addQuestion() {
    this.newQuestion = '';
    this.addingQuestion = true;
  }

  addPossible() {
    this.newPossible =  new MinMaxSubTask();
    this.newPossible.subtask_id = UUID.UUID();
    this.addingPossible = true;
  }

  insertNewSubTask() {
    this.estimation.subtasks.push(_.cloneDeep(this.newSubTask));
    this.newSubTask = null;
    this.addingSubtask = false;
    this.updateHours();
  }

  insertNewQuestion(event) {
    this.estimation.questions.push(event);
    this.newQuestion = null;
    this.addingQuestion = false;
  }

  insertNewPossible() {
    this.estimation.potttential_subtasks.push(_.cloneDeep(this.newPossible));
    this.newPossible = null;
    this.addingPossible = false;
    this.updateHours();
  }

  updateHours() {
    this.estimation.min_hours = 0;
    this.estimation.max_hours = 0;
    this.estimation.pottential_min = 0;
    this.estimation.pottential_max = 0;
    this.estimation.subtasks.forEach((st) => {
        this.estimation.min_hours += st.min;
        this.estimation.max_hours += st.max;
    });
    this.estimation.potttential_subtasks.forEach((st) => {
        this.estimation.pottential_min += st.min;
        this.estimation.pottential_max += st.max;
    });
  }

  ngOnInit() {
  }

}
