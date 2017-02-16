import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-min-max-question-form',
  templateUrl: './min-max-question-form.component.html',
  styleUrls: ['./min-max-question-form.component.scss']
})
export class MinMaxQuestionFormComponent {

  @Input() question: string;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  addQuestion() {
    this.onSubmit.emit(this.question);
  }

  constructor() { }

}
