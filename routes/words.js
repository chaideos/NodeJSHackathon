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

router.get('/:currentWord/:word', function(req, res, next) {
  console.log(req.params.word);
  console.log(req.params.currentWord);

  var isValidWord = wordDictionary.isWord(req.params.word);
  var lastLetterCurrentWordIndex = req.params.currentWord.length - 1;

  // First letter of new word has to equal current word
  if(isValidWord && req.params.currentWord[lastLetterCurrentWordIndex] == req.params.word[0]) {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(404);
  }
});

router.get('/score/:currentWord/:word', function(req, res, next) {
  console.log(req.params.word);
  console.log(req.params.currentWord);

  var score = wordDictionary.scoreWord(req.params.currentWord, req.params.word);
  res.json({ score: score })
});

module.exports = router;
