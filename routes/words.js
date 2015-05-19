var express = require('express');
var wordDictionary = require('word-dictionary');
var bodyParser = require('body-parser');
var url = require('url');
var router = express.Router();

/* GET Submitted word. */
router.get('/:word', function(req, res, next) {
  console.log(req.params.word);

  if(wordDictionary.isWord(req.params.word)) {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(404);
  }
});

module.exports = router;
