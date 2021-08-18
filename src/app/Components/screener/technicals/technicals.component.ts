import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CandlesModel } from 'src/app/Models/Candlesmodel';
import { CandlesService } from 'src/app/Services/candles.service';
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


  constructor(private candles:CandlesService) { }

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

}
