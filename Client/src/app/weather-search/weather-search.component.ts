import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { WeatherSearchResult } from '../model/weather-search-result';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html'
})

export class WeatherSearchComponent implements OnInit {

  cityName : string;
  weatherSearchResult : WeatherSearchResult[];

  constructor(private weatherService : WeatherService,
              private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.cityName = '';
  }

  onSearch() {
    this.weatherService.getWeatherData(this.cityName).subscribe(
        data => {
                this.weatherService.setWeatherData(data);
              },
        error => {
                console.log(error);
                this.weatherService.setWeatherData([]);
                this.snackBar.open("Error Occurred. Please contact admin team", "Close", {duration : 5000});
              });
  }

}
