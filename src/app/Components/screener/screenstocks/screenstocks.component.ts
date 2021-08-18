import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DatePipe } from '@angular/common';
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
  constructor( public datepipe:DatePipe) { }

  ngOnInit(): void {
    
  }

  retrieve(event){
    this.formattedtargetDate = this.datepipe.transform(this.targetDate,'yyyyMMdd')
    alert(this.formattedtargetDate)
    this.isclicked = true
    
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
}
