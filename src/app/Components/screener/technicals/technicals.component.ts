import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CandlesModel } from 'src/app/Models/Candlesmodel';
import { CandlesService } from 'src/app/Services/candles.service';
import {ConfirmationService} from 'primeng/api';
import { WatchlistService } from 'src/app/Services/watchlist.service';
import { WatchlistRequest } from 'src/app/Models/WatchlistRequest';
import {MessageService} from 'primeng/api';
import { WatchlistResponse } from 'src/app/Models/WatchlistResponse';

@Component({
  selector: 'app-technicals',
  templateUrl: './technicals.component.html',
  styleUrls: ['./technicals.component.css']
})
export class TechnicalsComponent implements OnInit {

  @Input() targetDate:string;
  stockcount:any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  candlesdata:CandlesModel[] = []
  display:boolean
  selectedstock:String
  watchlst:WatchlistRequest = {};
  watchlistdate:String;
  watchlistresponse:WatchlistResponse[] = [];
  wlresponse:WatchlistResponse;
  signaltype:String;


  constructor(private candles:CandlesService,private confirmationService: ConfirmationService,
              private watchlist:WatchlistService,private msgservice:MessageService) { }

  ngOnInit(): void {
    this.candles.getTechnicals(this.targetDate).then(res => {this.candlesdata = JSON.parse(res.toString());
      this.stockcount = this.candlesdata.length;
      this.countChanged.emit(this.stockcount); 
    })
  }

  ngOnChanges():void {
    this.candles.getTechnicals(this.targetDate).then(res => {this.candlesdata = JSON.parse(res.toString());
      this.stockcount = this.candlesdata.length;
      this.countChanged.emit(this.stockcount); 
    })
  }

  
  selectstockrow(candle: CandlesModel)
   {
    this.display = true
    this.selectedstock = candle.symbol
    this.watchlistdate = candle.tradedate
    this.signaltype = candle.CandlePattern
    this.confirmationService.confirm(
      {
        message: 'Are you sure to add ' +  this.selectedstock +' to the watchlist?',
        accept:() =>{
          this.watchlst.symbolname = this.selectedstock;
          this.watchlst.signaltype = this.signaltype;
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
