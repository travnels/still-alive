var express = require('express'),
    util = require('util'),
    five = require("johnny-five"),
    board = new five.Board();

var app = express();
var led;
board.on("ready", function() {
    led = new five.Led(13);
    util.debug('LED init');
});

app.get('/lighton', function(req,res) {
    led.on();
    console.log("on")
});

app.get('/lightoff', function(req,res) {
    led.off();
    console.log("off")
});

app.listen(3000);
util.debug('Server running at http://127.0.0.1:3000');
