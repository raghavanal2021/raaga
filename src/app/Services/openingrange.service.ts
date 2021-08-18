import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpeningrangeService {

  constructor(private http:HttpClient) { }

  getOpeningRange(stock:string) {
    let url = "http://localhost:8003/getOpeningRange/" + stock;
    return this.http.get<any>(url).toPromise().then(res => <any[]>res).then(data => 
      {
        return <any[]>data;
      })
  }

  getOpeningList(stock:string,startDate:string, endDate:string) {
    let url = "http://localhost:8003/getOpeningRangelist/"+stock+"/"+startDate+"/"+endDate
    return this.http.get<any>(url).toPromise().then(res => <any[]>res).then(data =>
      {
        return <any>data;
      }
      )
  }
}
