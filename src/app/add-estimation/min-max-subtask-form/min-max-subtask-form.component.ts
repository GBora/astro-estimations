import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import MinMaxSubTask from '../../models/sub-tasks/min-max-subtask.model';

@Component({
  selector: 'app-min-max-subtask-form',
  templateUrl: './min-max-subtask-form.component.html',
  styleUrls: ['./min-max-subtask-form.component.scss']
})
export class MinMaxSubtaskFormComponent implements OnInit {

  @Input() subtask: MinMaxSubTask;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  isPossible = false;

  addNewSubtask() {
    this.onSubmit.emit(this.isPossible);
  }

  constructor() { }

  ngOnInit() {
  }

}
