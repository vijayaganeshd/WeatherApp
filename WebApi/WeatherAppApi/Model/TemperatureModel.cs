using Newtonsoft.Json;

namespace WeatherAppApi.Model
{
    public class TemperatureModel
    {
        [JsonProperty("temp_min")]
        public string MinimumTemperature { get; set; }

        [JsonProperty("temp_max")]
        public string MaximumTemperature { get; set; }
    }
}
