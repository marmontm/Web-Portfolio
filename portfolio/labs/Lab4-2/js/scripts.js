var myCanvas = document.getElementById("drawing");
var myContext = myCanvas.getContext("2d");
var lblScore = document.getElementById("score");
var lblRemainingTime = document.getElementById("remaining-time");
var myGame = null;

function Target(posX, posY, sizeX, sizeY) {
    this.posX = posX;
    this.posY = posY;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
}

function Game(timeSec) {
    this.remainingTime = timeSec;
    this.myTimer = null;
    this.isPlaying = false;

    this.play = function () {
        lblRemainingTime.innerHTML = this.remainingTime;
        this.myTimer = setInterval(this.tick, 1000);
        this.isPlaying = true;
    };

    this.stop = function () {
        clearInterval(this.myTimer);
        this.isPlaying = false;
    };

    this.tick = function () {
        this.remainingTime--;
        lblRemainingTime.innerHTML = this.remainingTime;
        if (this.remainingTime <= 0) {
            this.stop();
        }
    };

    this.reset = function () {
        if (this.isPlaying){
            this.stop();
        }
        this.remainingTime = 10;
    }
}

myCanvas.addEventListener("click", function () {
    if (myGame != null) {
        if (myGame.isPlaying){
            // check if cursor is on target
        }
        else {

        }
    }
};
