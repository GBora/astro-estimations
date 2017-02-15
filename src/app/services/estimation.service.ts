import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import EstimationRequest from '../models/request/estimation-request.model';

@Injectable()
export class EstimationService {
  baseURL = 'https://astro-estimations-back.herokuapp.com';

  postEstimation(estimation: EstimationRequest): Promise<Response> {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      let requestOptions = new RequestOptions({
          headers: headers,
      });

      let url = this.baseURL + '/new-estimation';

      return this.http.post(url, JSON.stringify(estimation), requestOptions)
                      .toPromise();
  }

  updateEstimation(id: string, estimation: EstimationRequest): Promise<Response> {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      let requestOptions = new RequestOptions({
          headers: headers,
      });

      let url = this.baseURL + '/estimation/' + id;

      return this.http.put(url, JSON.stringify(estimation), requestOptions)
                      .toPromise();
  }

  getEstimation(id: string): Promise<Response> {
    let url = this.baseURL + '/estimation/' + id;
          return this.http.get(url)
                          .toPromise();
  }

  constructor(private http: Http) { }

}
