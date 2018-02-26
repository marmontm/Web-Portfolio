    /*
    * Simulate a click on 'Add person' button
    * when pressing Enter.
    *
    * Script from w3schools.com
    * 'https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp'
    *
    */


// Get the input field
var input = document.getElementById("person-name");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("btn-add-person").click();
    }
});

addEventListener("load", personController.firstRun);
addEventListener("onDataChange", personView.render);
