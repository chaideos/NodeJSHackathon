var express = require('express');
var wordDictionary = require('word-dictionary');
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

module.exports = router;
