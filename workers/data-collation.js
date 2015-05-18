var request = require('request');
var firebase = require('firebase');
var cronJob = require('cron').CronJob;
var now = require('./../config/urls-config')[0];
var forecasts = require('./../config/urls-config')[1];
var rootRef = require('./../config/urls-config')[2];
var cities = ['new-york', 'san-francisco', 'lagos', 'london', 'port-harcourt'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

module.exports = (function() {
  'use strict';

  cities.forEach(function(city, index, array) {

    var getToday = new cronJob ({
      cronTime: '00 00 */1 * * *',
      onTick: function() {
        request
          .get({
            url: now + city
          }, function(err, response, body) {
            if (!err && response.statusCode === 200) {
              var result = JSON.parse(body);
              var date = new Date(result.dt * 1000);
              var details = {};
              details.day = days[date.getDay()];
              details.temp = result.main.temp;
              details.weather = {
                main: result.weather[0].main,
                description: result.weather[0].description
              };
              details.humidity = result.main.humidity;
              details.wind = {
                speed: result.wind.speed,
                degree: result.wind.deg
              };
              var ref = rootRef.child(city + '/today');
              ref.set(details);
            }
          });

      }

    });

    getToday.start();

    var getFiveDays = new cronJob ({
      cronTime: '00 00 */8 * * *',
      onTick: function() {
        request
          .get({
            url: forecasts + city
          }, function(err, response, body) {
            if (!err && response.statusCode === 200) {
              var result = JSON.parse(body);
              result[list].forEach(function(element, index, array) {
                var date = new Date(element.dt * 1000);
                var details = {};
                details.day = days[date.getDay()];
                details.temp = {
                  min: element.temp.min,
                  max: element.temp.max
                };
                details.weather = {
                  main: element.weather[0].main,
                  description: element.weather[0].description
                };
                details.humidity = element.humidity;
                details.wind = {
                  speed: element.speed,
                  degree: element.deg
                };

                var ref = rootRef.child(city + '/five-day-forecast/' + index);

                ref.set(details);

              });
            }
          });

      }

    });

    getFiveDays.start();

  });

})();



