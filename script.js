
var APIKey = "c098ebad01cb430089c372ffb1e6503b";


$("#submitCity").on('click', function (event) {
    var cityInput = $("#weatherInput").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + cityInput + "&units=imperial&appid=" + APIKey;
    event.preventDefault()
    console.log(cityInput);

$.ajax({
url: queryURL,
method:"GET"
}).then(function(response) {
console.log(response);

var cityName =  response.name;
// var date = $("<h2>").text().append(cityName);
var temperature = response.main.temp;
var humidity = response.main.humidity;
var windSpeed = response.wind.speed;

$("#weatherDiv").append("City: " + cityName);
$("#weatherDiv2").append("Wind Speed: " + windSpeed + "MPH <br>");
$("#weatherDiv2").append("Temperature: " + temperature + "°F <br>");
$("#weatherDiv2").append("Humidity: " + humidity + "%");


});
});
