import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  // uName = new Subject<any>();

  uName = new BehaviorSubject("sanket");

  private url = `https://jsonplaceholder.typicode.com/users`;

  userList(): Observable<any> {
    return this._http.get(this.url);
  }
}
