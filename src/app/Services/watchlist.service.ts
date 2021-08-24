import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WatchlistRequest } from '../Models/WatchlistRequest';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http:HttpClient) {
  
   }

   addWatchlist(watch:WatchlistRequest) {
    let url = "http://localhost:8000/screener/watchlist/addtowatchlist"
    const payloadobj = {"watchlistname": watch.watchlistname, "watchlistdate": watch.watchlistdate, "symbolname":watch.symbolname, "signaltype":watch.signaltype, "addedDate": watch.addedDate }
    let payload = JSON.stringify(payloadobj)
    const headers = { 'content-type': 'application/json'}  

    console.log(payload)
    return this.http.post(url,payload,{'headers':headers}).toPromise().then(res => <any[]>res).then(data =>
      {
        return <any>data;
      }
      )

   }
}
