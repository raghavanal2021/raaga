import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { SelectItem } from "primeng/api";
import { SelectItemGroup } from "primeng/api";
import { FilterService } from "primeng/api";
import { MasterService } from 'src/app/Services/master.service';
import { StrategymasterService } from 'src/app/Services/strategymaster.service';
import { OpeningRange } from 'src/app/Models/OpeningRangeModel';
import { OpeningrangeService } from 'src/app/Services/openingrange.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-back-test',
  templateUrl: './back-test.component.html',
  styleUrls: ['./back-test.component.css']
})
export class BackTestComponent implements OnInit {
  text: string;
  results:any[] =[];
   mlist:any;
   symbollist:any[];
   strategies:any[] = [];
   selectedstrategy:any;
   companyname:any;
   industry:any;
   isincode:any;
   ranges:OpeningRange[];
   basicData: any;
   basicOptions: any;
   showDiv:boolean = false;
   visibleSidebar1;
   rangeDates: Date[];
   startDate:any;
   endDate:any;

  constructor(private master:MasterService,private strategy:StrategymasterService,private openrange:OpeningrangeService, public datepipe:DatePipe) { }

  ngOnInit(): void {
    this.master.getmasterlist().then(masterlist => {this.mlist = JSON.parse(masterlist.toString());
    this.strategy.getStrategyList().then(strategy => {let strat = JSON.parse(strategy.toString());
                                                      console.log(strat)
                                                      for (let k =0; k < strat.length; k++) {
                                                        this.strategies.push(strat[k].strategyName);
                                                        console.log(this.strategies);
                                                      }
                                                     })
    
    })
  }

  search(event) {
    console.log(this.mlist.length);
    let filtered:any[] = [];
    let query = event.query;
    for (let i = 0; i < this.mlist.length;i++ ){    
      this.symbollist = this.mlist[i];
//      console.log(this.symbollist);
      let symbol = this.symbollist['Symbol'];
      if (symbol.toLowerCase() == query.toLowerCase()) {
        filtered.push(symbol);
        this.companyname = this.symbollist['Company Name'];
        this.industry = this.symbollist['Industry'];
        this.isincode = this.symbollist['ISIN Code'];
              }
    }
    this.results = filtered

  }

  retrieve(event){
    alert(this.text);
    this.showDiv = !this.showDiv;
    this.startDate = this.datepipe.transform(this.rangeDates[0],'yyyyMMdd')
    this.endDate = this.datepipe.transform(this.rangeDates[1],'yyyyMMdd')
    alert("Start Date " + this.startDate + " End Date " + this.endDate )
    
  }
}
