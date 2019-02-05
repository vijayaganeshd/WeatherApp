import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAppMaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    WeatherAppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
