import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CprService {

  constructor(private http:HttpClient) { }


  getcpr(targetDate:string) {
    let url = "http://localhost:8000/screener/cpr/"+targetDate
    return this.http.get<any>(url).toPromise().then(res => <any[]>res).then(data =>
      {
        return <any>data;
      }
      )

  }
}
