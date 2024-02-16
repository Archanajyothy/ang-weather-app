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
    city : {}
  }
  isDay : boolean = true;
  cities = ['Kollam','Trivandrum','Palakkad','Manali','Kottayam','Chennai','New delhi','Bangalore']

  constructor(private apiService : ApiServiceService){}

  currentTime = new Date().getTime() / 1000;

  ngOnInit(): void {
    for (let i = 0; i < this.cities.length; i++) {
      const city = this.cities[i];
      this.apiService.getWeatherData(this.cities[i]).subscribe((res) => {
          this.WeatherData[city] = res
          console.log(this.WeatherData);

          if(this.currentTime >= this.WeatherData[city].sys.sunrise && this.currentTime <= this.WeatherData[city].sys.sunset){
            this.isDay = true;
          }else{
            this.isDay = false;
          }
          console.log(this.currentTime);
          
        })
    }

   
  }

}
