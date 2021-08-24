import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NarrowRange } from 'src/app/Models/NarrowRangeModel';
import { Nr4screenerService } from 'src/app/Services/nr4screener.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { WatchlistRequest } from 'src/app/Models/WatchlistRequest';
import { WatchlistResponse } from 'src/app/Models/WatchlistResponse';
import { WatchlistService } from 'src/app/Services/watchlist.service';
@Component({
  selector: 'app-nr4',
  templateUrl: './nr4.component.html',
  styleUrls: ['./nr4.component.css']
})
export class Nr4Component implements OnInit {
  nr4data:NarrowRange[] ;
  @Input() targetDate:string;
  stockcount:any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  selectedstock:String;
  display:boolean= false
  watchlst:WatchlistRequest = {};
  watchlistdate:String;
  watchlistresponse:WatchlistResponse[] = [];
  wlresponse:WatchlistResponse;
 

  constructor(private nr4service:Nr4screenerService, private confirmationService: ConfirmationService,
              private watchlist:WatchlistService,private msgservice:MessageService ) { }

  ngOnInit(): void {
  }

  
  ngOnChanges(): void {
    alert("Passed on Date" + this.targetDate)
    this.nr4service.getnr4(this.targetDate).then(res => {this.nr4data = JSON.parse(res.toString());
    this.stockcount = this.nr4data.length
    this.countChanged.emit(this.stockcount)
  })

}


selectstockrow(nr4:NarrowRange) {
  this.display = true
  this.selectedstock = nr4.symbol
  this.watchlistdate = nr4.tradedate
  this.confirmationService.confirm(
    {
      message: 'Are you sure to add ' +  this.selectedstock +' to the watchlist?',
      accept:() =>{
        this.watchlst.symbolname = this.selectedstock;
          this.watchlst.signaltype = "NR4";
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
