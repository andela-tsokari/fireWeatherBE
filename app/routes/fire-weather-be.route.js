var weather = require('./../controllers/fire-weather-be.controller');

module.exports = function(router) {
  'use strict';

  router
    .route('/lagos')
    .get(weather.getToday);

  router
    .route('/lagos/five')
    .get(weather.getFiveDays);

  router
    .route('/new-york')
    .get(weather.getToday);

  router
    .route('/new-york/five')
    .get(weather.getFiveDays);

  router
    .route('/san-francisco')
    .get(weather.getToday);

  router
    .route('/san-francisco/five')
    .get(weather.getFiveDays);

  router
    .route('/london')
    .get(weather.getToday);

  router
    .route('/london/five')
    .get(weather.getFiveDays);

};