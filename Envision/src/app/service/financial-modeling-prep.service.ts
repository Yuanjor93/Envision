import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FinancialModelingPrepService {

  constructor(private httpClient: HttpClient) { }

public getStockHistoricalData() {

  // tslint:disable-next-line:max-line-length
  return this.httpClient.get<HistoricalPriceChange>('https://financialmodelingprep.com/api/v3/historical-price-full/'
  + 'GOOG' + '?from=2019-03-12&to=2019-12-31');
}

public getStockHistoricalData1(ticker , startDate?, endDate?) {

  // tslint:disable-next-line:max-line-length
  return this.httpClient.get<HistoricalPriceChange>('https://financialmodelingprep.com/api/v3/historical-price-full/'
  + ticker  + '?from=2019-03-12&to=2019-12-31');
}


// tslint:disable-next-line:comment-format
//https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12

}
