var express = require('express');

var routes = require('./../app/routes/fire-weather-be.route');

module.exports = (function() {
  'use strict';

  var app = express();

  var router = express.Router();

  app
    .use('/api/v1', router);

  routes(router);

  return app;

})();