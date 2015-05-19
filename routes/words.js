var express = require('express');
var wordDictionary = require('word-dictionary');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET Submitted word. */
router.get('/', function(req, res, next) {
  if(wordDictionary.isWord("Hello")) {
    res.status(200);
  }
  else {
    res.status(404);
  }
  res.send();
});

/* POST Submitted word. */
router.post('/', function(req, res, next) {

  // TODO bodyparse.json() get data

  if(wordDictionary.isWord('abnegate')) {
    res.status(200);
  }
  else {
    res.status(404);
  }
  res.send();
});

module.exports = router;
