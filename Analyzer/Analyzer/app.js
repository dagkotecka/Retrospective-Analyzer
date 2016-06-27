//
// Dagmara Kotecka 2016
// 

var express = require('express');
var ui = require('./routes/ui');
var http = require('http');
var path = require('path');
 
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', ui.index);
app.get('/gamestart', ui.gameStart);
app.post('/getGame', ui.getGame);
app.get('/mood', ui.mood);
app.get('/5L', ui.fiveL);
app.get('/speedboat', ui.speedboat);
app.get('/starfish', ui.starfish);
app.get('/candy', ui.candy);
app.get('/360', ui.appr);
app.get('/gms', ui.gms);

http.createServer(app).listen(app.get('port'), "0.0.0.0", function () {
    console.log('Express server listening on port ' + app.get('port'));
});