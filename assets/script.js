//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city

// global variables
var apiKey = "d65ddd585e2ceb67ebcedc60bda04ae2";
var savedSearches = [];

// make list of previously searched cities
var searchHistoryList = function(cityName) {
    $('.past-search:contains("' + cityName + '")').remove();

}
