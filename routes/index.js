var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../views/join_screen.html'));
});

router.post('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../views/join_screen.html'));
});

router.get('/join/room', function (req, res) {
  res.sendFile(path.join(__dirname + '/../views/join_screen.html'));
});


router.post('/api/play', function (req, res) {
  console.log("Post Data:"+ req.body.playerName);
  var players = {};
  var playerArr = new Array();
  res.sendFile(path.join(__dirname + '/../views/game_screen.html'));
});

// GET request handler for css and javascript files
router.get('/scripts/jquery-1.11.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/../scripts/jquery-1.11.2.min.js'));
});

router.get('/scripts/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/../scripts/bootstrap.min.js'));
});

router.get('/scripts/wordGame.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/../scripts/wordGame.js'));
});

router.get('/styles/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname + '/../styles/bootstrap.min.css'));
});

router.get('/styles/wordGame.css', function (req, res) {
  res.sendFile(path.join(__dirname + '/../styles/wordGame.css'));
});

module.exports = router;
