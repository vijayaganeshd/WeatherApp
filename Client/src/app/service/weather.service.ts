import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WeatherSearchResult } from '../model/weather-search-result';

@Injectable()

export class WeatherService {
    
    weatherSearchResultUpdated = new Subject<WeatherSearchResult[]>();

    constructor(private http: HttpClient) {
    }

    getWeatherData(cityName: string) : Observable<WeatherSearchResult[]> {

        const endPoint = `${environment.BASE_API_URL}weather?cityName=${cityName}`;

        return this.http.get(endPoint).pipe (

            map(response => {
                let weatherSearchResult : WeatherSearchResult[] = [];

                if(response && response["list"]) {
                    weatherSearchResult = response["list"].map(element => {
                            let item = <WeatherSearchResult> { };
                            item.date = element.dt_txt;
                            item.minTemperature = element.main.temp_min;
                            item.maxTemperature = element.main.temp_max;
                            item.forecast = element.weather[0].description;
                            item.imagePath = element.weather[0].icon;
                            return item;
                    });
                }

                return weatherSearchResult;
              }
        ));
    }

    setWeatherData(weatherSearchResult : WeatherSearchResult[])
    {
        this.weatherSearchResultUpdated.next(weatherSearchResult);
    }
}