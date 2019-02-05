import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherAppMaterialModule } from '../material-module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { CommonModule } from '@angular/common';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        WeatherAppMaterialModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        WeatherSearchComponent,
        WeatherListComponent
      ],
      providers: [WeatherService]
    }).compileComponents();
    
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('Weather Forecast');
  }));
});
