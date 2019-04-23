import { WeatherService } from './../../services/weather/weather.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ClockService } from '../../services/clock/clock.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnInit, OnDestroy {

  location = 'Bangkok';

  clock$: Observable<Date>;

  weather: any;
  weather$: Observable<any>;

  private subscription: Subscription;

  constructor(
    private clockService: ClockService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.setClock();
    this.setWeatherWithInterval(this.location);
    this.subscription = this.weather$.subscribe(data => this.weather = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private setClock(): void {
    this.clock$ = this.clockService.getClock();
  }

  public getDate(date: Date): ShortDate {
    const week: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateString: string[] = date.toDateString().split(' ');
    return {
      day: week[date.getDay()],
      date: `${dateString[1]} ${dateString[2]}, ${dateString[3]}`
    };
  }

  public getTime(date: Date): string {
    const hour: string = date.getHours().toString();
    const min: string = date.getMinutes().toString();
    const sec: string = date.getSeconds().toString();
    return `${hour.length > 1 ? hour : '0' + hour}:
     ${min.length > 1 ? min : '0' + min}:
     ${sec.length > 1 ? sec : '0' + sec}`;
  }

  private setWeatherWithInterval(location: string): void {
    this.weather$ = this.weatherService.getWeatherWithInterval(location);
  }

  public getWeatherConditionIcon(weather: any): string {
    try {
      return `../../../assets/icons/${weather.weather[0].icon}.png`;
    } catch (err) {
      return '';
    }
  }

  public convertFtoC(fahrenheit: number): number {
    const celsius = fahrenheit * 1.8 + 32;
    return Math.round(celsius * 100) / 100;
  }

  public convertTime(duration: number): string {
    const fullDate: Date = new Date(1000 * duration);
    const date: ShortDate = this.getDate(fullDate);
    return `${date.date} @${fullDate.getHours()}: ${fullDate.getMinutes()}`;
  }
}

interface ShortDate {
  day: string;
  date: string;
}