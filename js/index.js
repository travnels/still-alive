

$("#upButton").live("click",function() {
    alert(' Up Button has been clicked');
})

$("#downButton").live("click",function() {
    alert(' Down Button has been clicked');
})

$("#leftButton").live("click",function() {
    alert(' Left Button has been clicked');

    $.ajax({
        //The URL to process the request
        'url' : '/motoron',
        //The type of request, also known as the "method" in HTML forms
        //Can be 'GET' or 'POST'
        'type' : 'GET'
    });
})

$("#rightButton").live("click",function() {
    alert(' Right Button has been clicked');
})

$("#fireButton").live("click",function() {
    alert(' Fire Button has been clicked');

    $.ajax({
        //The URL to process the request
        'url' : '/fire',
        //The type of request, also known as the "method" in HTML forms
        //Can be 'GET' or 'POST'
        'type' : 'GET'
    });
})

