using WeatherAppApi.Model;

namespace WeatherAppApi.Service
{
    public interface IWeatherAppService
    {
        WeatherModel GetWeatherInfo(string cityName);
    }
}
