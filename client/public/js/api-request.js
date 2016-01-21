
var internals = {};

$(document).ready(function () {

    // $.get( "http://0.0.0.0:9000/login", function( data ) {

    //     // load documentation
    //     // var sofaDocs = JSON.parse(data);

    //     // internals.load(data.docs, function (err, requestsDropDownBox) {});

    //     console.log('get request completed');

    //     $( "body" )
    //     .append( "Data: " + JSON.stringify(data) );
    // }, "json" );

    // var url = 'http://0.0.0.0:9000/login';
    var url = 'http://192.168.5.195:9000/login';

    jQuery.ajax( url , {
        complete: function (data, status) {

            console.log('** ' + JSON.stringify(data) + ' status ' + status); 
        } 
    });

    console.log('api-request loaded');
});
