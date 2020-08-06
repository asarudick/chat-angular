import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from './types/Endpoint';

@Injectable({
  providedIn: 'root'
})
// Wrapper class for HttpClient that utilizes endpoint configurations.
export class HttpService {
  constructor(private httpClient: HttpClient){}
  request(endpoint: Endpoint, urlParams?: any, params?: any): Observable<any> {
    // Evaluate the url. Could be a template function.
    const url = typeof endpoint.url === 'function' && endpoint.url(urlParams) || endpoint.url;
    const payload = [url];

    // Params specified?
    payload && payload.push(params);
    return this.httpClient[endpoint.method].apply(this.httpClient, payload);
  }
}
