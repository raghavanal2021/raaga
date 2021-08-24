import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CprService } from 'src/app/Services/cpr.service';
import { CPRModel } from 'src/app/Models/CPRModel';
import {ConfirmationService} from 'primeng/api';
import { WatchlistService } from 'src/app/Services/watchlist.service';
import { WatchlistRequest } from 'src/app/Models/WatchlistRequest';
import {MessageService} from 'primeng/api';
import { WatchlistResponse } from 'src/app/Models/WatchlistResponse';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cpr',
  templateUrl: './cpr.component.html',
  styleUrls: ['./cpr.component.css']
})
export class CprComponent implements OnInit {

  @Input() targetDate:string;
  stockcount:any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  cprdata:CPRModel[] = [];
  display:boolean;
  detaildisplay:boolean;
  selectedstock:String;
  selectedcprrow:CPRModel;
  selectedcpr:CPRModel[];
  watchlst:WatchlistRequest = {};
  watchlistdate:String;
  watchlistresponse:WatchlistResponse[] = [];
  wlresponse:WatchlistResponse;

  constructor(private cprService:CprService,private confirmationService: ConfirmationService,
              private watchlist:WatchlistService,private msgservice:MessageService, private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.cprService.getcpr(this.targetDate).then(res => {this.cprdata = JSON.parse(res.toString());
      this.stockcount = this.cprdata.length
      this.countChanged.emit(this.stockcount) 
    })
  }

  ngOnChange():void {
    this.cprService.getcpr(this.targetDate).then(res => {this.cprdata = JSON.parse(res.toString());
    console.log(this.cprdata)
    this.stockcount = this.cprdata.length
    this.countChanged.emit(this.stockcount)  
  })
}

selectstockrow(cprmodel:CPRModel) {
  this.display = true
  this.detaildisplay = false
  this.selectedstock = cprmodel.symbol
  this.watchlistdate = this.datepipe.transform(cprmodel.timestamp,'YYYYMMdd')
  this.confirmationService.confirm(
    {
      message: 'Are you sure to add ' +  this.selectedstock +' to the watchlist?',
      accept:() =>{
        this.watchlst.symbolname = this.selectedstock;
          this.watchlst.signaltype = "CPR";
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

selectdetailrow(model:CPRModel) {

}

showDialog() {
this.detaildisplay = true
this.selectedcpr = []
this.selectedcpr.push(this.selectedcprrow)
}

}
