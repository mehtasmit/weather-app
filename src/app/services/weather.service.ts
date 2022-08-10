import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    return this.http.get<WeatherData>(environment.WEATHER_API_BASE_URL+'/current.json', {
      headers : new HttpHeaders().set(environment.X_RAPID_API_HEADER, environment.X_RAPID_API_HEADER_VALUE)
      .set(environment.X_RAPID_API_KEY, environment.X_RAPID_API_VALUE),
      params: new HttpParams().set('q', cityName)
    });
  }
}
