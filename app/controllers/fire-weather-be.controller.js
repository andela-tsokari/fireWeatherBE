var request = require('request');

var weather = require('./../../config/urls-config');

var dataCollation = require('./../../workers/data-collation');

module.exports = {
  getToday: function(req, res) {

    var place = req.params.place;

    request
      .get({
        url: weather + place
      }, function(err, response, body) {
        return (!err) ? res.send(body) : res.send(err);

      });

  },

  getFiveDays: function(req, res) {
    var place = req.params.place;

    request
      .get({
        url: weather + place
      }, function(err, response, body) {
        return (!err) ? res.send(body) : res.send(err);

      });

  }

};