'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var app = express();

app.use('/swagger', express.static('./public/'));
app.use('/swagger.json', express.static('./public/swagger.json'));

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 8080;
  app.listen(port, '0.0.0.0',function(){
    console.log("Listening to port : "  + port);
  });

});
