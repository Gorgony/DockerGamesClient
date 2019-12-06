const WebSocket = require('ws');

const BOT = {
    EASY: "EASY",
    MEDIUM: "MEDIUM",
    HARD: "HARD"
};

const DIRECTION = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
};

const startMatch = function(secret, cb, chosenBot, url){
    if(!url) url = "gorgony.nl";

    const ws = new WebSocket(`ws://${url}:25587/MostSnake/Player?secret=${secret}&opponent=${chosenBot}`);

    ws.on('open', function open() {
        console.log("Connection made");
    });

    ws.on('message', function incoming(data) {
        data = JSON.parse(data);

        ws.send(cb(data.board, data.width, data.height, data.self, data.opponent));
    });

    ws.on('close', function close() {
        console.log("Connection closed");
    })
};

module.exports = {
    BOT,
    DIRECTION,
    startMatch
};





