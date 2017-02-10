import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import EstimationRequest from '../models/estimation-request.model';

@Injectable()
export class EstimationService {

  postEstimation(estimation: EstimationRequest): Promise<Response> {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      let requestOptions = new RequestOptions({
          headers: headers,
      });

      return this.http.post('http://localhost:8000/new-estimation', JSON.stringify(estimation), requestOptions)
                      .toPromise();
  }

  updateEstimation(id: string, estimation: EstimationRequest): Promise<Response> {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      let requestOptions = new RequestOptions({
          headers: headers,
      });

      let url = 'http://localhost:8000/estimation/' + id;

      return this.http.put(url, JSON.stringify(estimation), requestOptions)
                      .toPromise();
  }

  getEstimation(id: string): Promise<Response> {
    let url = 'http://localhost:8000/estimation/' + id;
          return this.http.get(url)
                          .toPromise();
  }

  constructor(private http: Http) { }

}
