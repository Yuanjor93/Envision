import { Component, OnInit } from '@angular/core';
import {FinancialModelingPrepService} from 'src/app/service/financial-modeling-prep.service';
import {Chart} from 'chart.js';
import { loadavg } from 'os';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor(private financialModelingPrepService: FinancialModelingPrepService) { }

  historicalPriceChange: HistoricalPriceChange;
   historicalArray: Historical[];

   STOCK_CLOSE: number[];

   STOCK_DATE: string[];
   chart;


  ngOnInit() {

    this.financialModelingPrepService.getStockHistoricalData().subscribe((data) => {
      this.historicalPriceChange = data;
      this.historicalArray = data.historical;
      this.STOCK_CLOSE = [];
      this.STOCK_DATE = [];
      // tslint:disable-next-line:forin

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.historical.length; i++) {
        this.STOCK_CLOSE.push(  data.historical[i].close);
        this.STOCK_DATE.push( data.historical[i].date);
      }
      this.loadChart( this.STOCK_DATE , this.STOCK_CLOSE);
    });


  }

  public loadChart(label, date) {
    this.STOCK_DATE = label;
    this.STOCK_CLOSE = date;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.STOCK_DATE,
        datasets: [
          {
            data:  this.STOCK_CLOSE,
            borderColor: '#3cba9f',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }


}
