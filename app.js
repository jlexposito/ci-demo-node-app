var express = require('express')
var app = express()
var configService = require('./configService.js');

app.get('/', function(req, res) {

    //Sending Json Response
    res.setHeader('Content-Type', 'application/json');


    //Reading Environment values
    var envKey = process.env.ENVIRONMENT;
    if (envKey === undefined) {
        envKey = "dev";
    }
    //Reading configuration file
    var config = JSON.parse(configService.readConfiguration(envKey, "config.json"));

    //Creating response
    var response = new ServiceResponse(envKey, config);


    res.json(response);

})

app.listen(8080, function() {
    //Start NodeJS server
    console.log('Example app listening on port 8080!')
})


//Response Object
var ServiceResponse = function(envKey, config) {
    this.envKey = envKey;
    this.envName = config.envName;
    this.version = "1.1";
    this.timestamp = new Date();
}