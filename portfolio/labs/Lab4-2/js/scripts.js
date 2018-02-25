var myCanvas = document.getElementById("drawing");
var myContext = myCanvas.getContext("2d");
var lblScore = document.getElementById("score");
var lblRemainingTime = document.getElementById("remaining-time");
var myGame = null;
var myTarget = null;
var positionCursor = {
    x: 0,
    y: 0
};

function Target(posX, posY, sizeX, sizeY) {
    this.posX = posX;
    this.posY = posY;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
}

function Game(timeSec) {
    this.remainingTime = timeSec;
    this.score = 0;
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
    };

    this.increaseScore = function (){
        this.score++;
    }
}

myCanvas.addEventListener("click", function (ev) {
    if (myGame != null) {
        if (myGame.isPlaying){
            positionCursor = getCursorPos(ev);
            if(
                ((myTarget.posX <= positionCursor.x)&&(positionCursor <= (myTarget.posX + myTarget.sizeX)))
                && ((myTarget.posY <= positionCursor.y)&&(positionCursor <= (myTarget.posY + myTarget.sizeY)))
            ){
                myGame.increaseScore();
                clearContext();
            }
        }
        else {
            myGame = new Game(10);
            myGame.play();
        }
    }
    else {
        myGame = new Game(10);
        myGame.play();
    }
});


/* Returns current position of cursor in canvas */
function getCursorPos(event){
    var rect = myCanvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function clearContext() {
    myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
}