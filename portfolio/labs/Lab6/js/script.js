$(document).ready(function () {
    // Event listeners
    $("#tb-search").keyup(function (ev) {
        ev.preventDefault();
        if (ev.keyCode === 13) {
            $("#btn-search").trigger("click");
        }
    });

    $("#btn-search").click(function (ev) {
        // Perform search
    })
});
