using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Net.Http;
using WeatherAppApi.Model;

namespace WeatherAppApi.Service
{
    public class WeatherAppService : IWeatherAppService
    {
        private IConfiguration _configuration;

        public WeatherAppService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public WeatherModel GetWeatherInfo(string cityName)
        {
            var responseMessage = new WeatherModel();

            if (!string.IsNullOrWhiteSpace(cityName))
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.DefaultRequestHeaders.Clear();

                    string requestURL = string.Format(_configuration.GetValue<string>("ApiSettings:weatherApiUrl"), cityName);

                    var response = httpClient.GetAsync(requestURL).Result;

                    if (response.IsSuccessStatusCode)
                    {
                        var result = response.Content.ReadAsStringAsync().Result;
                        responseMessage = JsonConvert.DeserializeObject<WeatherModel>(result);
                    }
                }
            }

            return responseMessage;
        }
    }
}
