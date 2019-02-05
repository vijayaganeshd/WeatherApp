using Newtonsoft.Json;

namespace WeatherAppApi.Model
{
    public class WeatherDetailModel
    {
        string imgPath = string.Empty;

        [JsonProperty("description")]
        public string WeatherDescription { get; set; }

        [JsonProperty("icon")]
        public string WeatherIcon
        {
            get
            {
                return "http://openweathermap.org/img/w/" + imgPath + ".png";
            }
            set
            {
                imgPath = value;
            }
        }
    }
}
