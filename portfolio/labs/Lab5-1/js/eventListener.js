$(document).ready(function () {
    // Event Listeners
    $("#person-name").keyup(function (ev) {
        ev.preventDefault();
        if (ev.keyCode === 13) {
            $("#btn-add-person").trigger("click");
        }
    });

    personController.firstRun();
});

addEventListener("onDataChange", personView.render);


/* Classic JS:
addEventListener("load", personController.firstRun);
addEventListener("onDataChange", personView.render);
 */
