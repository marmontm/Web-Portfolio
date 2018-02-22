var myCanvas = document.getElementById("drawing");
var myContext = myCanvas.getContext("2d");
var myObjects = [];
var posCursorClick = {
    x: 0,
    y: 0
};

var posPending = {
    x: 0,
    y: 0
};

/* DO when user clicks into the canvas */
myCanvas.addEventListener("mousedown", function (ev) {
    /* Get current cursor position for origin */
    posCursorClick = getCursorPos(ev);

    /* Start watching if user moves cursor */
    myCanvas.addEventListener("mousemove", mouseMoved);
});

/* DO when user releases click */
myCanvas.addEventListener("mouseup", function (ev) {
    /* Stop watching user cursor movements */
    myCanvas.removeEventListener("mousemove", mouseMoved);

    /* Add new line to objects */
    addNewObject(posCursorClick.x, posCursorClick.y, posPending.x, posPending.y);

    /* Clear canvas and display all objects
     * (Will remove guidance line) */
    redrawAll(myObjects);

    /* Store current cursor position
     * in case of user didn't move the cursor */
    posPending = getCursorPos(ev);
});

/* Undo line when 'Z' key is pressed */
document.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 90 is the "Z" key on the keyboard
    if (event.keyCode === 90) {
        removeLastObject(myObjects);
    }
});



/*
 * Functions based on events
 */

/* Called when user moved his cursor */
function mouseMoved(event){
    /* Clear canvas and display all objects
     * (Will remove previous guidance line) */
    redrawAll(myObjects);

    /* Get cursor position for destination point */
    posPending = getCursorPos(event);

    /* Draw guidance line */
    myContext.beginPath();
    setStyleGuidanceLine();
    myContext.moveTo(posCursorClick.x, posCursorClick.y);
    myContext.lineTo(posPending.x, posPending.y);
    myContext.stroke();
}

/* Returns current position of cursor in canvas */
function getCursorPos(event){
    var rect = myCanvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}



/*
 * Basic functions
 */

function redrawAll(objects){
    clearContext();
    for (var i = 0; i < objects.length; i++){
        drawLine(objects[i]);
    }
}

function clearContext() {
    myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function clearObjects(){
    myObjects = [];
}

function addNewObject(x0, y0, x1, y1){
    var path = [x0, y0, x1, y1];
    myObjects.push(path);
}

function removeLastObject(objects) {
    objects.pop();
    redrawAll(objects);
}

function drawLine(path){
    myContext.beginPath();
    setStyleRegularLine();
    myContext.moveTo(path[0], path[1]);
    myContext.lineTo(path[2], path[3]);
    myContext.stroke();
}

function setStyleRegularLine(){
    myContext.lineWidth = "2";
    myContext.strokeStyle = "black";
    myContext.setLineDash([]);
}

function setStyleGuidanceLine(){
    myContext.lineWidth = "2";
    myContext.strokeStyle = "red";
    myContext.setLineDash([5, 15]);
}