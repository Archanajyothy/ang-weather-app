import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  cityName = 'Kollam';
  
  constructor(private http: HttpClient) { }

  getWeatherData(city?: any){
    if (city) {
      this.cityName = city
    }
    const apiKey = '360c3b4348ac4509024381fdb4ffbf83'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apiKey}`;
    return this.http.get(apiUrl);
    
  }
}
