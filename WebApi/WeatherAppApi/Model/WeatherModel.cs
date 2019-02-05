using Newtonsoft.Json;
using System.Collections.Generic;

namespace WeatherAppApi.Model
{
    public class WeatherModel
    {
        [JsonProperty("cod")]
        public string Cod { get; set; }

        [JsonProperty("list")]
        public List<WeatherListModel> WeatherListModels { get; set; }

    }

}
