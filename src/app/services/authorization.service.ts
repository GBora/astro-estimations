import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthorizationService {

  getIP(): Promise<Response> {
      return this.http.get('//freegeoip.net/json/')
              .toPromise();
  }

  constructor(private http: Http) { }

}
