var connection = new WebSocket("wss://obscure-waters-98157.herokuapp.com");
var chat = document.getElementById("chatConsole-text");
var chatConsole = document.getElementById("chatConsole");
var connectionstate = document.getElementById("connectionState");
var inputChat = document.getElementById("input-textMessage");


connection.onmessage = function(message) {
    // console.log(message.data);
    chat.innerHTML += "<br>" + message.data;
    chatConsole.scrollTop = chatConsole.scrollHeight;
}

connection.onopen = function() {
    connectionstate.innerHTML = "Connected";
    connectionstate.className = "ready"
}


function sendText() {
    connection.send(inputChat.value);
    inputChat.value = null;
}

function sendEmoji() {
    connection.send("LOGO");
}