import { componentFactoryName } from '@angular/compiler';
import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, Input, OnInit } from '@angular/core';
import { OpeningrangeService } from 'src/app/Services/openingrange.service';
import { OpeningRange } from 'src/app/Models/OpeningRangeModel';
import { DatePipe } from '@angular/common';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-opening-range',
  templateUrl: './opening-range.component.html',
  styleUrls: ['./opening-range.component.css']
})
export class OpeningRangeComponent implements OnInit {
  @Input() companyname;
  @Input() isincode;
  @Input() ticker;
  @Input() startDate;
  @Input() endDate;
  ranges:OpeningRange[];
  basicData:any;
  basicOptions:any;
  labels:any[]=[];
  highdata:any[]=[];
  lowdata:any[]=[];

  constructor(private openrange:OpeningrangeService,public datepipe:DatePipe) { }

  ngOnInit(): void {
    this.openrange.getOpeningList(this.ticker,this.startDate,this.endDate).then(res => {this.ranges = JSON.parse(res.toString());
      console.log(res);  
      for (let i = 0; i< this.ranges.length;i++)
      {
        this.labels.push(this.datepipe.transform(this.ranges[i].timestamp,'YYYY-MM-dd'));
        this.highdata.push(this.ranges[i].ORHigh);
        this.lowdata.push(this.ranges[i].ORLow);
      }
      this.basicData = {
        labels: this.labels,
        datasets: [
          {
            label: 'Open Range High',
            data: this.highdata,
            fill: false,
            borderColor: '#42A5F5'
          },
          {
            label: 'Open Range Low',
            data: this.lowdata,
            fill: false,
            borderColor: '#FFA726'
          }
        ]
      }

    })  
  }

}
