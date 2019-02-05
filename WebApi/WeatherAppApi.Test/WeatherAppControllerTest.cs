using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using WeatherAppApi.Controllers;
using WeatherAppApi.Model;
using WeatherAppApi.Service;
using Microsoft.AspNetCore.Mvc;

namespace WeatherAppApi.Test
{
    [TestClass]
    public class WeatherAppControllerTest
    {
        private WeatherAppController weatherAppController;
        private Mock<IWeatherAppService> weatherAppService;

        [TestInitialize]
        public void Setup()
        {
            weatherAppService = new Mock<IWeatherAppService>();
            weatherAppController = new WeatherAppController(weatherAppService.Object);
        }


        [TestMethod]
        public void Given_Null_When_GetWeatherInfo_Then_Return_Null()
        {
            // Arrange
            weatherAppService.Setup(x => x.GetWeatherInfo(null)).Returns(new WeatherModel() { Cod = null });

            // Act
            var actualResult = ((JsonResult)weatherAppController.Get(null)).Value as WeatherModel;

            // Assert
            Assert.AreEqual(null, actualResult.Cod);

        }

        [TestMethod]
        public void Given_Invalid_CityName_When_GetWeatherInfo_Then_Return_Null()
        {
            // Arrange
            weatherAppService.Setup(x => x.GetWeatherInfo("!£$%^&")).Returns(new WeatherModel() { Cod = null });

            // Act
            var actualResult = ((JsonResult)weatherAppController.Get("!£$%^&")).Value as WeatherModel;

            // Assert
            Assert.AreEqual(null, actualResult.Cod);

        }

        [TestMethod]
        public void Given_Valid_CityName_When_GetWeatherInfo_Then_Return_200()
        {
            // Arrange
            weatherAppService.Setup(x => x.GetWeatherInfo("Reading")).Returns(new WeatherModel() { Cod = "200" });

            // Act
            var actualResult = ((JsonResult)weatherAppController.Get("Reading")).Value as WeatherModel;

            // Assert
            Assert.AreEqual("200", actualResult.Cod);

        }

        
    }
}
