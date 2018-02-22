var audioStream = document.getElementById("audio-stream");
var btnPlay = document.getElementById("btn-play");
var btnPause = document.getElementById("btn-pause");
var sldVolume = document.getElementById("sld-volume");


btnPlay.onclick = function (ev) {
    audioStream.play();
}

btnPause.onclick = function (ev) {
    audioStream.pause();
}

audioStream.onvolumechange = function (ev) {
    sldVolume.value = audioStream.volume * 100;
}

sldVolume.oninput = function (ev) {
    audioStream.volume = sldVolume.value / 100;
}

window.onload = function () {
    audioStream.volume = .8;
}
