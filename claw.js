var five = require("johnny-five"),
    board;

board = new five.Board({
  debug: true
});

board.on("ready", function() {

  var claw = new five.Servo({ pin: 9 }),
      arm = new five.Servo({ pin: 10 }),
      degrees = 10,
      incrementer = 10,
      last;

  this.loop( 25, function() {

    if ( degrees >= 180 || degrees === 0 ) {
      incrementer *= -1;
    }

    degrees += incrementer;

    if ( degrees === 180 ) {
      if ( !last || last === 90 ) {
        last = 180;
      } else {
        last = 90;
      }
      arm.move( last - 45);
    }

    claw.move( degrees );
  });
});

/**
 * Created by IntelliJ IDEA.
 * User: travis
 * Date: 10/20/12
 * Time: 10:25 AM
 * To change this template use File | Settings | File Templates.
 */
