import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Nr7screenerService } from 'src/app/Services/nr7screener.service';
import { NarrowRange } from 'src/app/Models/NarrowRangeModel';
import {ConfirmationService} from 'primeng/api';
import { WatchlistService } from 'src/app/Services/watchlist.service';
import { WatchlistRequest } from 'src/app/Models/WatchlistRequest';
import {MessageService} from 'primeng/api';
import { WatchlistResponse } from 'src/app/Models/WatchlistResponse';

@Component({
  selector: 'app-nr7',
  templateUrl: './nr7.component.html',
  styleUrls: ['./nr7.component.css']
})
export class Nr7Component implements OnInit {
  nr7data:NarrowRange[] =[];
  @Input() targetDate:string;
  stockcount:any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  exportColumns: any[];
  display:boolean = false;
  selectedstocks:NarrowRange[];
  selectedstock:String;
  watchlst:WatchlistRequest = {};
  watchlistdate:String;
  watchlistresponse:WatchlistResponse[] = [];
  wlresponse:WatchlistResponse;
  constructor(private nr7service:Nr7screenerService,private confirmationService: ConfirmationService,
              private watchlist:WatchlistService,private msgservice:MessageService) { }

  ngOnInit(): void {
    this.nr7service.getnr7(this.targetDate).then(res => {this.nr7data = JSON.parse(res.toString());
  })
  
  
  this.countChanged.emit(this.stockcount)
  }

  ngOnChanges(): void {
    this.nr7service.getnr7(this.targetDate).then(res => {
      this.nr7data = JSON.parse(res.toString());
      this.stockcount = this.nr7data.length
      this.countChanged.emit(this.stockcount)    
  })
  }

  selectstockrow(nr7:NarrowRange) {
    console.log(nr7)
    this.display = true
    this.selectedstock = nr7.symbol
    this.watchlistdate = nr7.tradedate
    this.confirmationService.confirm(
      {
        message: 'Are you sure to add ' +  this.selectedstock +' to the watchlist?',
        accept:() =>{
          this.watchlst.symbolname = this.selectedstock;
          this.watchlst.signaltype = "NR7";
          this.watchlst.watchlistdate =this.watchlistdate.toString();
          console.log(this.watchlst.watchlistdate)
          this.watchlst.watchlistname = "default";
          let currentDate = new Date()
          this.watchlst.addedDate = currentDate.toISOString() ;
          this.watchlist.addWatchlist(this.watchlst).then(res=> {
                         this.watchlistresponse = JSON.parse(res);
                         this.wlresponse = this.watchlistresponse[0];
                         this.msgservice.add({severity:'success',summary:'Added to watchlist', detail:this.selectedstock + " added successfully to the watchlist"})
          })
        }
      }
    )
  }

}
