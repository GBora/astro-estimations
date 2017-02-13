import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstimationService } from '../../services/estimation.service';
import EstimationRequest from '../../models/request/estimation-request.model';
import { AuthorizationService } from '../../services/authorization.service';
import SimpleEstimationTask from '../../models/task/simple-estimation-task.model';
import SimpleSubTask from '../../models/sub-tasks/simple-sub-task';

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

  newEstimationSubject: string;

  constructor(private estimationService: EstimationService,
              private route: ActivatedRoute,
              private authorizationService: AuthorizationService) { }

  makeSimpleEstimation(): any {
    let simpleEstimation = new SimpleEstimationTask();
    simpleEstimation.method = this.request.method;
    simpleEstimation.subject = this.newEstimationSubject;
    simpleEstimation.totalHours = 0;
    simpleEstimation.subtasks = [];
    this.newEstimationSubject = null;
    return simpleEstimation;
  }

  addEstimation() {
    let newEstimation;
    switch (this.request.method) {
      case 'single': newEstimation = this.makeSimpleEstimation(); break;
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
