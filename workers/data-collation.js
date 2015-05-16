var request = require('request');
var firebase = require('firebase');
var cronJob = require('cron').CronJob;
var now = require('./../config/urls-config')[0];
var forecasts = require('./../config/urls-config')[1];
var rootRef = require('./../config/urls-config')[2];
var cities = ['new-york', 'san-francisco', 'lagos', 'london', 'port-harcourt'];

module.exports = (function() {
  'use strict';

  cities.forEach(function(element, index, array) {

    var getToday = new cronJob ({
      cronTime: '*/10 * * * * *',
      onTick: function() {
        request
          .get({
            url: now + element
          }, function(err, status, body) {
            if (!err) {
              console.log(body);
            }
          });

      }

    });

    getToday.start();

    var getFiveDays = new cronJob ({
      cronTime: '00 00 */24 * * *',
      onTick: function() {
        request
          .get({
            url: forecasts + element
          }, function(err, status, body) {
            if (!err) {
              console.log(body);
            }
          });

      }

    });

    getFiveDays.start();

  });

})();



