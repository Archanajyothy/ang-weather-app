import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrl: './weatherdetails.component.css'
})
export class WeatherdetailsComponent implements OnInit{

  city: string = '';

  constructor(private apiService : ApiServiceService, private route : ActivatedRoute){}
  WeatherData: any = {
    main: {},
    isDay:true,
    weather: { 
      0:{}
    },
    sys: {}
  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.city = params['city']; 
    });
    console.log(this.city);
    
    this.apiService.getWeatherData(this.city).subscribe((res) => {
      this.WeatherData = res
      
      //console.log('from details page'+ this.WeatherData);
    })
    
  }

  onSubmit(event: Event){
    this.apiService.getWeatherData(this.city).subscribe((res) => {
      this.WeatherData = res
      console.log("from function");
      console.log(this.WeatherData);
    })
  }

}

//for my refernce
 //in the response object haze is stored inside weather object, inside the key named 0.