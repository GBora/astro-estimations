import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstimationService } from '../../services/estimation.service';
import EstimationRequest from '../../models/request/estimation-request.model';
import { AuthorizationService } from '../../services/authorization.service';
import SimpleEstimationTask from '../../models/task/simple-estimation-task.model';
import SimpleSubTask from '../../models/sub-tasks/simple-sub-task';
import MinMaxEstimationTask from '../../models/task/min-max-estimation-task.model';

@Component({
  selector: 'app-add-estimation-page',
  templateUrl: './add-estimation-page.component.html',
  styleUrls: ['./add-estimation-page.component.scss'],
  providers: [EstimationService, AuthorizationService]
})

export class AddEstimationPageComponent implements OnInit {

  sub: any;

  request_id: string;
  request: EstimationRequest;
  current_ip: string;

  new_estimation_title: string;

  constructor(private estimationService: EstimationService,
              private route: ActivatedRoute,
              private authorizationService: AuthorizationService) { }

  makeSimpleEstimation(): any {
    let simpleEstimation = new SimpleEstimationTask();
    simpleEstimation.method = this.request.method;
    simpleEstimation.title = this.new_estimation_title;
    simpleEstimation.total_hours = 0;
    simpleEstimation.subtasks = [];
    this.new_estimation_title = null;
    return simpleEstimation;
  }

  makeMinMaxEstimation() {
    let minMaxEstimation =  new MinMaxEstimationTask();
    minMaxEstimation.method = this.request.method;
    minMaxEstimation.title = this.new_estimation_title;
    minMaxEstimation.max_hours = 0;
    minMaxEstimation.min_hours = 0;
    minMaxEstimation.subtasks = [];
    minMaxEstimation.questions = [];
    this.new_estimation_title = null;
    return minMaxEstimation;
  }

  addEstimation() {
    let newEstimation;
    switch (this.request.method) {
      case 'single': newEstimation = this.makeSimpleEstimation(); break;
      case 'min-max': newEstimation = this.makeMinMaxEstimation(); break;
    }
    this.request.individual_estimations.push(newEstimation);
    this.request.participants_ips.push(this.current_ip);
  }

  postEstimation() {
    this.estimationService.updateEstimation(this.request_id, this.request).then((response) => {
      console.log(response);
    });
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.request_id = params['id'];
        this.estimationService.getEstimation(this.request_id).then((response) => {
          this.request = response.json();
        });
      });

    this.authorizationService.getIP().then( (reply) => {
      this.current_ip = reply.json().ip;
    });
  }

}
