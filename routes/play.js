var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    console.log("Post Data:"+ req.body.playerName);
    var playerArr = playerData.players;
    playerArr.push(req.body.playerName);
    playerData.players = playerArr;


    fs.writeFile('./users.json', JSON.stringify(playerData), function (err,data) {
        if (err) {
            return console.log(err);
        }
        console.log(playerData);
        res.send(JSON.stringify(playerData));
    });
    // res.sendFile(path.join(__dirname + '/../views/game_screen.html'));
});

module.exports = router;