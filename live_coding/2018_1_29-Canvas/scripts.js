function canvasClicked(event) {
    var canvas = document.getElementById("drawCanvas");
    var context = canvas.getContext("2d");

    context.lineWidth = 4;
    context.strokeStyle = 'rgb(200, 0, 0)';
    context.rect(event.x, event.y, 50, 50);
    context.stroke();
}

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function drawSomething() {
    var canvas = document.getElementById("drawCanvas");
    var context = canvas.getContext("2d");

    var x = getRandomNumber(300);
    var y = getRandomNumber(300);

    context.beginPath();

    var size = getRandomNumber(60);

    context.rect(x, y, size, size);
    context.stroke();

    context.closePath();
}

function start() {
    window.setInterval(drawSomething, 300);
}