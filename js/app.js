var express = require('express'),
    util = require('util'),
    five = require("johnny-five"),
    board = new five.Board();

var app = express();
var motor;
board.on("ready", function() {
    motor = new five.Motor(9);
    util.debug('Motor init');
});

app.get('/motoron', function(req,res) {
    motor.start();
    console.log("on")
});

app.get('/motoroff', function(req,res) {
    motor.stop();
    console.log("off")
});

app.listen(3000);
util.debug('Server running at http://127.0.0.1:3000');
