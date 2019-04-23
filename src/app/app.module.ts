import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnderConstructComponent } from './components/under-construct/under-construct.component';
import { TempMonitoringComponent } from './components/temp-monitoring/temp-monitoring.component';
import { WeatherBoardComponent } from './components/weather-board/weather-board.component';
import { TempChartComponent } from './components/temp-chart/temp-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UnderConstructComponent,
    TempMonitoringComponent,
    WeatherBoardComponent,
    TempChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
