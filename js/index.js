$("#leftButton").live("vmousedown",function() {
    console.log(' Left Button has been clicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorLeftOn',
        'type' : 'GET'
    });
})

$("#leftButton").live("vmouseup",function() {
    console.log(' Left Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorLeftOff',
        'type' : 'GET'
    });
})

$("#rightButton").live("vmousedown",function() {
    console.log(' Right Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorRightOn',
        'type' : 'GET'
    });
})

$("#rightButton").live("vmouseup",function() {
    console.log(' Right Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorRightOff',
        'type' : 'GET'
    });
})

$("#upButton").live("vmousedown",function() {
    console.log(' Up Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorUpOn',
        'type' : 'GET'
    });
})

$("#upButton").live("vmouseup",function() {
    console.log(' Up Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorUpOff',
        'type' : 'GET'
    });
})

$("#downButton").live("vmousedown",function() {
    console.log(' Down Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorDownOn',
        'type' : 'GET'
    });
})

$("#downButton").live("vmouseup",function() {
    console.log(' Down Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorDownOff',
        'type' : 'GET'
    });
})

$("#fireButton").live("vmousedown",function() {
    console.log(' Fire Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/fireOn',
        'type' : 'GET'
    });
})

$("#fireButton").live("vmouseup",function() {
    console.log(' Fire Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/fireOff',
        'type' : 'GET'
    });
})


