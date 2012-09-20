var express = require('express'),
    util = require('util'),
    five = require("johnny-five"),
    board = new five.Board(),
    app = express();

var motor;

board.on("ready", function() {
    motor = new five.Motor(9);
    fireMotor = new five.Motor(10);
    util.debug('Motor init');
});

app.get('/motoron', function(req,res) {
    motor.start();
    console.log("on")
    res.send(200);
});

app.get('/motoroff', function(req,res) {
    motor.stop();
    console.log("off")
    res.send(200);
});

app.get('/fire', function(req,res) {
    fireMotor.start();
    console.log("FIRE")

    board.wait( 15000, function() {
        fireMotor.stop();
        console.log("done")
        res.send(200);

    });
    res.send(200);

});

app.use("/", express.static(__dirname));

app.listen(3000);
util.debug('Server running at http://127.0.0.1:3000');
