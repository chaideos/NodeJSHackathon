var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/join_screen.html'));
});

app.post('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/join_screen.html'));
});

app.get('/join/room', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/join_screen.html'));
});


app.post('/api/play', function (req, res) {
    console.log("Post Data:"+ req.body.playerName);
    res.sendFile(path.join(__dirname + '/views/game_screen.html'));
});

// GET request handler for css and javascript files
app.get('/scripts/jquery-1.11.2.min.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/scripts/jquery-1.11.2.min.js'));
});

app.get('/scripts/bootstrap.min.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/scripts/bootstrap.min.js'));
});

app.get('/scripts/wordGame.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/scripts/wordGame.js'));
});

app.get('/styles/bootstrap.min.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/styles/bootstrap.min.css'));
});

app.get('/styles/wordGame.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/styles/wordGame.css'));
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});