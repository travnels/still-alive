var express = require('express'),
    util = require('util'),
    five = require("johnny-five"),
    board = new five.Board(),
    app = express(),
    staticPath = __dirname + "/";

var motorRight, motorLeft, motorUp, motorDown;

board.on("ready", function() {
    motorRight = new five.Motor(9);
    motorLeft = new five.Motor(8);
    motorUp = new five.Motor(10);
    motorDown = new five.Motor(11);
    fireMotor = new five.Motor(12);
    util.debug('Motor init');
});

app.get('/motorRightOn', function(req,res) {
    motorRight.start();
    console.log("right on")
    res.send(200);
});

app.get('/motorRightOff', function(req,res) {
    motorRight.stop();
    console.log("right off")
    res.send(200);
});

app.get('/motorLeftOn', function(req,res) {
    motorLeft.start();
    console.log("right on")
    res.send(200);
});

app.get('/motorLeftOff', function(req,res) {
    motorLeft.stop();
    console.log("right off")
    res.send(200);
});


app.get('/motorUpOn', function(req,res) {
    motorUp.start();
    console.log("right on")
    res.send(200);
});

app.get('/motorUpOff', function(req,res) {
    motorUp.stop();
    console.log("right off")
    res.send(200);
});


app.get('/motorDownOn', function(req,res) {
    motorDown.start();
    console.log("right on")
    res.send(200);
});

app.get('/motorDownOff', function(req,res) {
    motorDown.stop();
    console.log("right off")
    res.send(200);
});

app.get('/fireOn', function(req,res) {
    fireMotor.start();
    console.log("fire on")
    res.send(200);

});

app.get('/fireOff', function(req,res) {
    fireMotor.stop();
    console.log("fire Off")
    res.send(200);

});
app.use(express.static(staticPath));

app.listen(8000);

util.debug('Server running');