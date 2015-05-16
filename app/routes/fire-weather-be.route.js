var weather = require('./../controllers/fire-weather-be.controller');

module.exports = function(router) {
  'use strict';

  router
    .route('/:place')
    .get(weather.getToday);

  router
    .route('/:place/five')
    .get(weather.getFiveDays);

};