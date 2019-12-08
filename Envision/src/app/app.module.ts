import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


const appRoutes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Stocks', component: StocksComponent },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  } ,
  {
    path: 'Stocks',
    component: StocksComponent,
    data: { title: 'Stocks' }
  }

];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
