import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) {
   }

   getmasterlist() {
     return this.http.get<any>("http://localhost:8003/getStockList").toPromise().then (res=><any[]>res).then (data => {
     return <any[]>data;})
    
   }
}
