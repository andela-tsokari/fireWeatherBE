var now = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';

var forecasts = 'http://api.openweathermap.org/data/2.5/forecast/daily/?units=metric&cnt=5&q=';

var rootRef = 'https://fireweather.firebaseio.com/';

module.exports = [now, forecasts, rootRef];