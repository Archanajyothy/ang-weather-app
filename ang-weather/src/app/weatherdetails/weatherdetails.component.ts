import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrl: './weatherdetails.component.css'
})
export class WeatherdetailsComponent implements OnInit{
  constructor(private apiService : ApiServiceService){}
  WeatherData: any = {
    main: {},
    isDay:true,
    weather: { 
      0:{}
    }
  }
  ngOnInit(): void {
    this.apiService.getWeatherData().subscribe((res) => {
      this.WeatherData = res
      //console.log('from details page'+ this.WeatherData);
    })
  }

}

//for my refernce
 //in the response object haze is stored inside weather object, inside the key named 0.