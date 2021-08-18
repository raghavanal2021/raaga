import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Nr7screenerService } from 'src/app/Services/nr7screener.service';
import { NarrowRange } from 'src/app/Models/NarrowRangeModel';
import {ConfirmationService} from 'primeng/api';


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

  constructor(private nr7service:Nr7screenerService,private confirmationService: ConfirmationService) { }

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
