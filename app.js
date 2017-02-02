var express = require('express')
var app = express()

app.get('/', function (req, res) {

  //Sending Json Response
  res.setHeader('Content-Type', 'application/json');
  var response = new ServiceResponse(); 

  var mode = process.env.ENVIRONMENT;
  if (mode === undefined) {
    mode = "dev";
  }
  response.environment=mode;
  res.json(response);

})

app.listen(8080, function () {
  //Start NodeJS server
  console.log('Example app listening on port 8080!')
})


//Response Object
var ServiceResponse = function (){
  this.environment = "none"
  this.version = "1.2";
  this.timestamp = new Date();
  this.updated = new Date("2017-02-02 17:00:");
}
