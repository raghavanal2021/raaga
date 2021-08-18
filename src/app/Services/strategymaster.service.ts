import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrategymasterService {

  constructor(private http:HttpClient) { }

  getStrategyList() {
    return this.http.get<any>("http://localhost:8003/getStrategy").toPromise().then (res=><any[]>res).then (data => {
     return <any[]>data;})
  }
}
