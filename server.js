var app = require('./config/app-config');

var port = process.env.PORT || 4000;

app
  .listen(port, function(){
    console.log('FireWeather App running on port: ' + port);
  });