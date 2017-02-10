import { EstimationService } from '../../services/estimation.service';
import { Component, OnInit } from '@angular/core';
import EstimationRequest from '../../models/estimation-request.model';
import { AuthorizationService } from '../../services/authorization.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-new-estimation-page',
  templateUrl: './new-estimation-page.component.html',
  styleUrls: ['./new-estimation-page.component.sass'],
  providers: [AuthorizationService, EstimationService]
})
export class NewEstimationPageComponent implements OnInit {

  request: EstimationRequest;
  submitted: boolean = false;
  current_ip: string;
  generatedEstimations: Array<EstimationRequest> = [];
  baseURL: string;

  constructor(private authorizationSerive: AuthorizationService, private estimationService: EstimationService) { }

  ngOnInit() {
    this.getBaseUrl();
    this.request = new EstimationRequest();
    this.request.individual_estimations = [];
    this.request.participants_ips = [];
    this.request.request_id = UUID.UUID();
    this.authorizationSerive.getIP().then( (reply) => {
      this.current_ip = reply.json().ip;
      this.request.creator_ip = this.current_ip;
    });
  }

  getBaseUrl() {
    let pathArray = location.href.split( '/' );
    let protocol = pathArray[0];
    let host = pathArray[2];
    this.baseURL = protocol + '//' + host;
  }

  postEstimation() {
    this.submitted = true;
    this.estimationService.postEstimation(this.request).then((reply) => {
      this.generatedEstimations.push(this.request);
    });
  }

  addNewEstimation() {
    this.submitted = false;
    //Reset request
    this.request = new EstimationRequest();
    this.request.individual_estimations = [];
    this.request.participants_ips = [];
    this.request.creator_ip = this.current_ip;
    this.request.request_id = UUID.UUID();
  }

}
