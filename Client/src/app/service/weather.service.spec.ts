import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { environment } from 'src/environments/environment';

describe('WeatherService', () => {

    let injector : TestBed;
    let service : WeatherService;
    let httpMock: HttpTestingController;
    let cityName : string = '';

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WeatherService]
        });

        injector = getTestBed();
        service = injector.get(WeatherService);
        httpMock = injector.get(HttpTestingController);

    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('getWeatherData', () => {
        it('should return an Observable<any>', () => {

        const testData = {
            'cod': '200',
            'list': [
                {
                'dt_txt': '2019-02-02 00:00:00',
                'main': {
                    'temp_min': '0.91',
                    'temp_max': '1.31'
                    },
                'weather': [
                    {
                    'description': 'light rain',
                    'icon': 'http://openweathermap.org/img/w/10n.png'
                    }]
            },
            {
                'dt_txt': '2019-02-05 03:00:00',
                'main': {
                    'temp_min': '-7.29',
                    'temp_max': '-6.07'
                    },
                'weather': [
                    {
                        'description': 'clear sky',
                        'icon': 'http://openweathermap.org/img/w/01n.png'
                    }]
            }]};
        
        service.getWeatherData(cityName).subscribe(data => {
        expect(data.length).toEqual(2);
        });

        const endPoint = `${environment.BASE_API_URL}weather?cityName=${cityName}`;
        const req = httpMock.expectOne(endPoint);
        expect(req.request.method).toBe("GET");
        req.flush(testData);
        
        });
    });

});

