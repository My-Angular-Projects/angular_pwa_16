import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../types';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '8c2c465e0d39a78b22785f2d50771cf7';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);

  public getWeatherData(city: string): Observable<IWeather> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', API_KEY);

    return this.http.get<IWeather>(`${API_URL}weather`, { params });
  }
}
