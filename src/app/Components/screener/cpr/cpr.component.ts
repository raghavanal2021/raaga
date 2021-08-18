import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CprService } from 'src/app/Services/cpr.service';
import { CPRModel } from 'src/app/Models/CPRModel';

@Component({
  selector: 'app-cpr',
  templateUrl: './cpr.component.html',
  styleUrls: ['./cpr.component.css']
})
export class CprComponent implements OnInit {

  @Input() targetDate:string;
  stockcount:any;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();
  cprdata:CPRModel[] = []

  constructor(private cprService:CprService) { }

  ngOnInit(): void {
    this.cprService.getcpr(this.targetDate).then(res => {this.cprdata = JSON.parse(res.toString());
      this.stockcount = this.cprdata.length
      this.countChanged.emit(this.stockcount) 
    })
  }

  ngOnChange():void {
    this.cprService.getcpr(this.targetDate).then(res => {this.cprdata = JSON.parse(res.toString());
    this.stockcount = this.cprdata.length
    this.countChanged.emit(this.stockcount)  
  })
}

}
