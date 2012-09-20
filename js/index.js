$("#upButton").live("click",function() {
    alert(' Up Button has been clicked');
})

$("#downButton").live("click",function() {
    alert(' Down Button has been clicked');
})

$("#leftButton").live("vmousedown",function() {
    console.log(' Left Button has been clicked');

    $.ajax({
        'url' : 'http://localhost:3000/motoron',
        'type' : 'GET'
    });
})

$("#leftButton").live("vmouseup",function() {
    console.log(' Left Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motoroff',
        'type' : 'GET'
    });
})

$("#rightButton").live("click",function() {
    alert(' Right Button has been clicked');
})

$("#fireButton").live("click",function() {
    $.ajax({
        'url' : 'http://localhost:3000/fire',
        'type' : 'GET'
    });
})

