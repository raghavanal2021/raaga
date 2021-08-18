import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NarrowRange } from 'src/app/Models/NarrowRangeModel';
import { Nr4screenerService } from 'src/app/Services/nr4screener.service';
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

  constructor(private nr4service:Nr4screenerService) { }

  ngOnInit(): void {
  }

  
  ngOnChanges(): void {
    alert("Passed on Date" + this.targetDate)
    this.nr4service.getnr4(this.targetDate).then(res => {this.nr4data = JSON.parse(res.toString());
    this.stockcount = this.nr4data.length
    this.countChanged.emit(this.stockcount)
  })

}
}
