import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';

const routes: Routes = [
  {path:'', component: WeatherComponent},
  {path:'view',component: WeatherdetailsComponent},
  { path: 'weather-details/:city', component: WeatherdetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
