import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NarrowRange } from 'src/app/Models/NarrowRangeModel';
import { Nr4screenerService } from 'src/app/Services/nr4screener.service';
import {ConfirmationService} from 'primeng/api';

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
  constructor(private nr4service:Nr4screenerService, private confirmationService: ConfirmationService ) { }

  ngOnInit(): void {
  }

  
  ngOnChanges(): void {
    alert("Passed on Date" + this.targetDate)
    this.nr4service.getnr4(this.targetDate).then(res => {this.nr4data = JSON.parse(res.toString());
    this.stockcount = this.nr4data.length
    this.countChanged.emit(this.stockcount)
  })

}


selectstockrow(nr7:NarrowRange) {
  this.display = true
  this.selectedstock = nr7.symbol
  this.confirmationService.confirm(
    {
      message: 'Are you sure to add ' +  this.selectedstock +' to the watchlist?',
      accept:() =>{

      }
    }
  )
}


}
