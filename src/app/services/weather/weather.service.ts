import { map, startWith, flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private api_key = 'b14fb4441b126f428cddb2aaa4e8b7fb';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getWeather(location: string): Observable<any> {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.api_key}&units=metric`
    ).pipe(
      map(result => {
        console.log(result);
        return result;
      })
    );
  }

  public getWeatherWithInterval(location: string): Observable<any> {
    return interval(30 * 1000).pipe(
        startWith(0),
        flatMap(() => this.getWeather(location))
      );
  }
}
