var firebase = require('firebase');

var now = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';

var forecasts = 'http://api.openweathermap.org/data/2.5/forecast/daily/?units=metric&cnt=6&q=';

var rootRef = new firebase('https://fireweather.firebaseio.com/');

module.exports = [now, forecasts, rootRef];