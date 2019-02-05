using Microsoft.AspNetCore.Mvc;
using WeatherAppApi.Service;

namespace WeatherAppApi.Controllers
{
    [Route("weather")]
    public class WeatherAppController : Controller
    {

        private readonly IWeatherAppService _weatherAppService;

        public WeatherAppController(IWeatherAppService weatherAppService)
        {
            _weatherAppService = weatherAppService;
        }

        [HttpGet]
        public ActionResult Get(string cityName)
        {
            return Json(_weatherAppService.GetWeatherInfo(cityName));
        }
    }
}
