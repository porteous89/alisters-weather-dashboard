# alisters-weather-dashboard

## Description

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. This challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. We have been given the link to the openweather API and will be starting from scratch.


## User Story

```md
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```md
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```


## Built Using

1. HTML
2. CSS
3. JavaScript
3. jQuery
4. Bootstrap
5. Openweather API

## Live Deployment

Link to my live project site: https://porteous89.github.io/alisters-weather-dashboard/

## Usage

#### Link to video of Weather Dashboard Working
https://drive.google.com/file/d/1FFZw4oQIipOl1_Psxtx-C_BaCUFv-4AY/view

#### screenshot of project showing persistant storage of cities
<img src="assets\weather-dashboard-saved-cities.png" width= 45% >


## Credits

#### Open Weather
https://openweathermap.org/forecast5

MDN - Using Fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

#### Eloquent JavaScript
(https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf)


## License

MIT License - License in Repo

---

## Features

1. simple interface with input and search button
2. user enters a city name, the weather is displayed both as Current and as a 5 day forecast
3. Current weather includes city name, temperature, weather icon, humidity and wind speed.
4. 5 day forecast shows date, temperature and wind speed for the next 5 days coming.
5. Once a city name has been searched it is saved to local storage and aded to the list.
6. Any city name in the displayed list can be selected to redisplay the updated weather info.


## Tests

1. If user presses enter without filling input box an error message is displayed.
2. When a city name is entered and the search button is clicked all the weather will display, current at the top, forecast below. 
