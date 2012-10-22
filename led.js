var five = require("johnny-five");

five.Board().on("ready", function() {
  // "strobe" an led in 100ms on-off phases
  five.Led(12).strobe();
});