using Newtonsoft.Json;
using System.Collections.Generic;

namespace WeatherAppApi.Model
{
    public class WeatherListModel
    {
        [JsonProperty("dt_txt")]

        public string ForecastDate { get; set; }

        [JsonProperty("main")]
        public TemperatureModel TemperatureModel { get; set; }

        [JsonProperty("weather")]
        public List<WeatherDetailModel> WeatherDetailModels { get; set; }
    }
}
