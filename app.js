/**
 * Created with JetBrains PhpStorm.
 * User: lumartin
 * Date: 13/07/13
 * Time: 03:05
 * To change this template use File | Settings | File Templates.
 */
var express = require('express'),
    app =  express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    connect = require('connect'),
    request = require('request'),
    jsdom = require('jsdom'),
    port = process.env.PORT || 8081;

//the app configuration
app.configure(function() {
    app.use(connect.static('./vitared'));
    app.set('appIndex', './vitared/index.html');
    app.use(connect.bodyParser());
    app.use(express.logger());
    app.use(express.errorHandler({ dumpExceptions: true }));
});
//we start teh server
server.listen(port, function() {
    console.log("Listening on " + port);
});

//set the routes
app.get('/', function(req, res) {
    res.sendfile(app.set('appIndex'));
});
app.get('/index.html', function(req, res) {
    res.sendfile(app.set('appIndex'))
});
app.get('*', function(req, res) {
    res.send('not found', 404);
});


io.sockets.on('connection', function(socket) {

    // when the client emits 'urltoscrap', this listens and executes
    socket.on('urltoscrap', function(url) {
        //Array the images
        var images = [];
        if(url.search('http://') != 0 && url.search('https://') != 0){
            url = 'http://' + url;
        }
        // we do the request to the url given
        request({uri: url}, function(err, response, body){
            //Just a basic error check
            if(!err && response.statusCode == 200){
                //Send the body param as the HTML code we will parse in jsdom
                //also tell jsdom to attach jQuery in the scripts and loaded from jQuery.com
                jsdom.env({
                    html: body,
                    scripts: [
                        'http://code.jquery.com/jquery.js'
                    ],
                    done: function(errors, window) {
                        var $ = window.$;
                        // find all the html images
                        $('img').each(function(idx, elem) {
                            var image = {},
                                src = $(elem).attr('src'),
                                x, y,
                                width = $(elem).attr('width'), //Width of the Image, height;
                                height = $(elem).attr('height'); //Height of the Image

                            if(!validateURL(src)){ //If is not a url
                                var index =src.indexOf('//'); //some images have double slash at the begining

                                if (index == 0){
                                    src = 'http://' + src.slice(2); //Replace the double slash
                                } else if (src.slice(0,1) != '/') {
                                    src = url + '/' + src;
                                } else if (src.slice(0,1) == '/') {
                                    src = url + src;
                                }
                            }

                            //Image configuration variables
                            x = 40;
                            y = 60;

                            if(width > x && height > y){
                                // Get the src and alt attributes
                                image.link = url;
                                image.image = {full: src, half: src, third:src, quarter:src};
                                image.description = $(elem).attr('alt');
                                images.push(image);
                            }
                        });
                        //We send the images to the client
                        socket.emit('imagestostore', images);
                    }
                });
            } else {
                console.log('Request error.');
            }
        });
    });
});

validateURL = function (url) {
    var regex=/^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(\/.*)?$/i;
    return regex.test(url);
}

