const { startMatch, BOT, DIRECTION } = require("docker-games-client");

function makeDecision(board, width, height, self, opponent){
    return DIRECTION.UP;
}

startMatch("y2X5Ki2OBwZfUAW4ghwJ", makeDecision, BOT.HARD);

