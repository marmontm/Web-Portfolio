/* UI elements*/

var myCanvas = document.getElementById("drawing");
var myContext = myCanvas.getContext("2d");
var lblScore = document.getElementById("score");
var lblRemainingTime = document.getElementById("remaining-time");
var lblMsg = document.getElementById("action");


/* Game settings and objects */

var score = 0;
var remainingtime = 0;
var msg = null;
var isPlaying = false;

var myTimer = null;
var myTarget = {
    posX: 0,
    posY: 0,
    sizeX: 50,
    sizeY: 50
}
var positionCursor = {
    x: 0,
    y: 0
};


/* Event listeners*/

myCanvas.addEventListener("click", function (ev) {
    if (!isPlaying) {
        startGame();
    }
    else{
        positionCursor = getCursorPos(ev);
        var isOnAxisX = ( (myTarget.posX <= positionCursor.x) && (positionCursor.x <= (myTarget.posX + myTarget.sizeX)) );
        var isOnAxisY = ( (myTarget.posY <= positionCursor.y) && (positionCursor.y <= (myTarget.posY + myTarget.sizeY)) );
        if (isOnAxisX && isOnAxisY) {
            console.log("Hit target: success");
            msg = "Yeeaah! Another one!";
            score++;
            displayRandomTarget();
        }
        else {
            console.log("Hit target: fail");
            msg = "Fail! Try again!";
        }
    }
    updateUI();
});


/* Game management */

function updateUI() {
    lblScore.innerHTML = score;
    lblRemainingTime.innerHTML = remainingtime;
    lblMsg.innerHTML = msg;
}

function startGame(){
    score = 0;
    remainingtime = 10;
    msg = "Hit as many targets as possible! Gooooo !";
    myCanvas.style.backgroundColor = "#ededed";

    displayRandomTarget();

    myTimer = setInterval(tick, 1000); // Call fct tick() each 1000ms
    isPlaying = true;
    updateUI();

    console.log("Game started");
}

function stopGame(){
    msg = "Game over! Click the canvas to start another game...";
    myCanvas.style.backgroundColor = "lightgrey";

    clearInterval(myTimer);
    isPlaying = false;
    clearContext();
    updateUI();

    console.log("Game stopped");

    alert("Game over!\nYour score: " + score.toString());
}

function tick() {
    remainingtime--;
    if (remainingtime <= 0) {
        stopGame();
    }
    updateUI();
}

/* Basic functions*/

function getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
}


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

function displayRandomTarget() {
    clearContext();
    var maxX = myCanvas.width - myTarget.sizeX;
    var maxY = myCanvas.height - myTarget.sizeY;
    myTarget.posX = getRandom(1, maxX);
    myTarget.posY = getRandom(1, maxY);
    console.log("New target:");
    console.log(myTarget);
    drawTarget(myTarget);
}

function drawTarget(target) {
    myContext.beginPath();
    myContext.fillStyle = 'rgb(247, 79, 79)';
    myContext.fillRect(target.posX, target.posY, target.sizeX, target.sizeY);
    myContext.stroke();
    myContext.closePath();
}