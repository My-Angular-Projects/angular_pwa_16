import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);

  public getWeatherData(city: string): Observable<IWeather> {
    const { API_URL, API_KEY } = environment;
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', API_KEY);

    return this.http.get<IWeather>(`${API_URL}weather`, { params });
  }
}
