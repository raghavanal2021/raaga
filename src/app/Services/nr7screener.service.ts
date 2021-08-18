import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Nr7screenerService {

  constructor(private http:HttpClient) { }

  getnr7(targetDate:string) {
    let url = "http://localhost:8000/screener/nr7/"+targetDate
    return this.http.get<any>(url).toPromise().then(res => <any[]>res).then(data =>
      {
        return <any>data;
      }
      )

  }

}
