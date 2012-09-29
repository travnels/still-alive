var express = require('express'),
    util = require('util'),
    five = require("johnny-five"),
    //board = new five.Board(),
    app = express(),
    staticPath = __dirname + "/";

var motor;

//board.on("ready", function() {
//    motor = new five.Motor(9);
//    fireMotor = new five.Motor(10);
//    util.debug('Motor init');
//});
//
//app.get('/motoron', function(req,res) {
//    motor.start();
//    console.log("on")
//    res.send(200);
//});
//
//app.get('/motoroff', function(req,res) {
//    motor.stop();
//    console.log("off")
//    res.send(200);
//});
//
//app.get('/fire', function(req,res) {
//    fireMotor.start();
//    console.log("FIRE")
//
//    board.wait( 15000, function() {
//        fireMotor.stop();
//        console.log("done")
//        res.send(200);
//
//    });
//    res.send(200);
//
//});

app.use(express.static(staticPath));

app.listen(8000);

util.debug('Server running');