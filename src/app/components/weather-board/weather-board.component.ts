import { WeatherService } from './../../services/weather/weather.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ClockService } from '../../services/clock/clock.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnInit {

  location = 'Bangkok';

  clock$: Observable<Date>;
  weather$: Observable<any>;

  constructor(
    private clockService: ClockService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.setClock();
    this.setWeather(this.location);
  }

  public log(data: any) {
    console.log(data);
  }

  private setClock(): void {
    this.clock$ = this.clockService.getClock();
  }

  public getDate(date: Date): string {
    const dateString: string[] = date.toDateString().split(' ');
    return `${dateString[0]}, ${dateString[1]} ${dateString[2]}, ${dateString[3]}`;
  }

  public getTime(date: Date): string {
    const hour: string = date.getHours().toString();
    const min: string = date.getMinutes().toString();
    const sec: string = date.getSeconds().toString();
    return `${hour.length > 1 ? hour : '0' + hour}:
     ${min.length > 1 ? min : '0' + min}:
     ${sec.length > 1 ? sec : '0' + sec}`;
  }

  private setWeather(location: string): void {
    this.weather$ = this.weatherService.getWeather(location);
  }

  public getWeatherConditionIcon(weather: any): string {
    try {
      return `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    } catch (err) {
      return '';
    }
  }

  public convertFtoC(fahrenheit: number) {
    const celsius = fahrenheit * 1.8 + 32;
    return Math.round(celsius * 100) / 100;
  }
}
