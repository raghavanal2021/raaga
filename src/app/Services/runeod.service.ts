import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { RunEODWebSocket } from './runeodwebsocket';
import 'rxjs/Rx'
import { map } from 'rxjs/operators'

@Injectable()
export class RuneodService {

  messages: Subject<any>;

  constructor(private wsService: RunEODWebSocket) {
    this.messages = <Subject<any>>wsService 
        .connect()
        .pipe(map((response:any):any => {
          return response;
          
        }))     
   }

   sendMsg(msg) {
    this.messages.next(msg)
  }
}
