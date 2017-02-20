import { EstimationService } from '../../services/estimation.service';
import { Component, OnInit } from '@angular/core';
import EstimationRequest from '../../models/request/estimation-request.model';
import { AuthorizationService } from '../../services/authorization.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-new-estimation-page',
  templateUrl: './new-estimation-page.component.html',
  styleUrls: ['./new-estimation-page.component.scss'],
  providers: [AuthorizationService, EstimationService]
})
export class NewEstimationPageComponent implements OnInit {

  request: EstimationRequest;
  submitted = false;
  current_ip: string;
  generatedEstimations: Array<EstimationRequest> = [];
  baseURL: string;
  uploadcare = null;

  constructor(private authorizationSerive: AuthorizationService, private estimationService: EstimationService) { }

  ngOnInit() {
    this.getBaseUrl();
    this.request = new EstimationRequest();
    this.request.individual_estimations = [];
    this.request.participants_ips = [];
    this.request.files = [];
    this.request.request_id = UUID.UUID();
    this.authorizationSerive.getIP().then( (reply) => {
      this.current_ip = reply.json().ip;
      this.request.creator_ip = this.current_ip;
    });
    this.uploadcare = window['uploadcare'];

  }

  uploadFile(request: EstimationRequest) {
    this.uploadcare.openDialog(null, {
      multiple: true
    }).done(function(file) {
      file.promise().done(function(fileInfo){
        request.files.push(fileInfo.cdnUrl);
      });
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

  copyToClipboard(id: string) {
    let urlField = document.querySelector('#' + id);
    // Create a Range object
    let range = document.createRange();
    // Set the Node to select the "range"
    range.selectNode(urlField);
    // Add the Range to the set of window selections
    window.getSelection().addRange(range);
    document.execCommand('copy');
  }

  addNewEstimation() {
    this.submitted = false;
    // Reset request
    this.request = new EstimationRequest();
    this.request.individual_estimations = [];
    this.request.participants_ips = [];
    this.request.creator_ip = this.current_ip;
    this.request.request_id = UUID.UUID();
  }

}
