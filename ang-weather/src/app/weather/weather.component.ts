import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  WeatherData : any = {
    main : {},
    isDay: true
  }

  constructor(private apiService : ApiServiceService, private http: HttpClient){}

  currentTime = new Date().getTime() / 1000;

  ngOnInit(): void {
    this.apiService.getWeatherData().subscribe((res) => {
      this.WeatherData = res
      console.log(this.WeatherData);
      if(this.currentTime > this.WeatherData.sys.sunrise && this.currentTime < this.WeatherData.sys.sunset){
        this.WeatherData.isDay = true
      }else{
        this.WeatherData.isDay = false
      }

      //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=360c3b4348ac4509024381fdb4ffbf83
    })
  }

}
