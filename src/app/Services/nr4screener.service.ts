import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Nr4screenerService {

  constructor(private http:HttpClient) { }
  
  getnr4(targetDate:string) {
    let url = "http://localhost:8000/screener/nr4/"+targetDate
    return this.http.get<any>(url).toPromise().then(res => <any[]>res).then(data =>
      {
        return <any>data;
      }
      )

  }
}
