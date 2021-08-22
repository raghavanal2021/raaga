import { Injectable } from '@angular/core';
import   * as sock   from 'socket.io-client'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs'; 


@Injectable()

export class RunEODWebSocket {

  private socket;

  constructor() { 

  }

  connect() : Subject<MessageEvent> {
    this.socket = sock.io("http://localhost:8085");

    let observable = new Observable (observer => {
      this.socket.on('loadstatus',(data) => {
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }

    })
    let observer = {
      next: (data:Object) => {
        this.socket.emit('startofday',JSON.stringify(data));
      },
    }
    return Subject.create(observer,observable)

  }


}
