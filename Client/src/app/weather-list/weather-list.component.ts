import { Component, OnInit } from '@angular/core';
import { WeatherSearchResult } from "../model/weather-search-result"
import { Subscription } from 'rxjs';
import { WeatherService } from '../service/weather.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html'
})

export class WeatherListComponent implements OnInit {

  displayedColumns: string[] = ['date', 'minTemperature','maxTemperature','forecast','imagePath'];
  
  weatherSearchResult: WeatherSearchResult[];

  private subscription : Subscription;

  constructor(private weatherService : WeatherService,
              private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.weatherSearchResult = [];
    this.subscription = this.weatherService.weatherSearchResultUpdated
        .subscribe((value : WeatherSearchResult[]) => {
            this.weatherSearchResult = value;

            if(this.weatherSearchResult.length <= 0)
            {
              this.snackBar.open("No record found.", "Close", {duration : 5000});
            }
        });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
