import { Component, OnInit } from '@angular/core';
import { EstimationService } from '../../services/estimation.service';
import { ActivatedRoute } from '@angular/router';
import EstimationRequest from '../../models/estimation-request.model';

@Component({
  selector: 'app-get-estimation-page',
  templateUrl: './get-estimation-page.component.html',
  styleUrls: ['./get-estimation-page.component.sass'],
  providers: [EstimationService]
})
export class GetEstimationPageComponent implements OnInit {

  sub: any;
  request_id: string;
  request: EstimationRequest;

  constructor(private estimationService: EstimationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        this.request_id = params['id'];
        this.estimationService.getEstimation(this.request_id).then((response) => {
          this.request = response.json();
        });
      });
  }

}
