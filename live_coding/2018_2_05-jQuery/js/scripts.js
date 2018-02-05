function getWeather(callback) {
    var weatherUrl = "http://";
    $.ajax({
        dataType: "jsonp",
        url: weatherUrl,
        success: callback
    });
}

function loadWeatherStuff() {
    getWeather(handleWeatherResponse);
}

function handleWeatherResponse(data){
    console.log("Weather data received");
    console.log(data);
    $("#weather")
}