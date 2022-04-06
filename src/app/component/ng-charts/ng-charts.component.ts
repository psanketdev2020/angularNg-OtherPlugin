import { Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-ng-charts',
  templateUrl: './ng-charts.component.html',
  styleUrls: ['./ng-charts.component.css']
})
export class NgChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  public chartData: ChartDataSets[] = [
   { 
     data:  [180, 480, 770, 90, 1000, 270, 400]
   }
  ];

  public chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartOptions: (ChartOptions) = {
    responsive: true,
  };

  public chartColore: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];

  public chartLegend = true;

  public chartType: ChartType = 'line';

}
