import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { RuneodService } from 'src/app/Services/runeod.service';

@Component({
  selector: 'app-screenstocks',
  templateUrl: './screenstocks.component.html',
  styleUrls: ['./screenstocks.component.css']
})
export class ScreenstocksComponent implements OnInit {
 
  targetDate:any;
  isclicked:any;
  formattedtargetDate:any;
  count:number;  
  nr7count:number;
  nr4count:number;
  cprcount:number;
  candlescount:number;
  display:boolean;
  selectedDate:String = "Choose the date"
  runDate:String = "Choose the date to run Screener"
  startDate:any;
  endDate:any;
  rangeDates: Date[];
  constructor( public datepipe:DatePipe, private eodService:RuneodService){ }

  ngOnInit(): void {
    
  }

  retrieve(event){
    this.formattedtargetDate = this.datepipe.transform(this.targetDate,'yyyyMMdd')
    this.isclicked = true
    this.selectedDate = this.formattedtargetDate
    
  }

  nr7countchangedHandler(count) {
    this.nr7count =parseInt(count)
  }

  nr4countchangedHandler(count) {
    this.nr4count =parseInt(count)
  }

  cprcountchangedHandler(count) {
    this.cprcount =parseInt(count)
  }
  candlescountchangedHandler(count) {
    this.candlescount =parseInt(count)
  }
  runload(event)
  { 
    this.startDate = this.datepipe.transform(this.rangeDates[0],'yyyyMMdd')
    this.endDate = this.datepipe.transform(this.rangeDates[1],'yyyyMMdd')
    let contract  =JSON.parse('{"startdate":"' + this.startDate.toString() +'","enddate":"' + this.endDate.toString() + '"'+ ',"noofdays":20}')
    this.eodService.sendMsg(contract)
    this.eodService.messages.subscribe(msg => {
    console.log(msg);
    })    
  }
  }

