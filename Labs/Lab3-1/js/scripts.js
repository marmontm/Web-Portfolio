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




/*
* Simulate a click on 'Send' button
* when pressing Enter.
*
* Script from w3schools.com
* 'https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp'
*
*/

// Execute a function when the user releases a key on the keyboard
inputChat.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("btn-send").click();
    }
});
