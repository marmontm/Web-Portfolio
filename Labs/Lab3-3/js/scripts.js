var btnPlay = document.getElementById("btn-play");
var btnPause = document.getElementById("btn-pause");
var audioStream = document.getElementById("audio-stream");

btnPlay.onclick = function (ev) {
    audioStream.play();
}

btnPause.onclick = function (ev) {
    audioStream.pause();
}
