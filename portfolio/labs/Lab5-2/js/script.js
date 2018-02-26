/*
    Reference for Jsonp use:
    https://www.sitepoint.com/jsonp-examples/
 */

$(document).ready(function () {
    $("#btn-ajax").click(function () {
        clearList();
        var jsonURL = "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp";
        $.ajax({
            type: 'GET',
            url: jsonURL,
            dataType: 'jsonp',
        });
    });
});

function jsonCallback(json) {
    console.log(json);
    json.forEach(function (item) {
        addItem(item.name, item.email);
    });
}

function addItem(name, email) {
    $("<span></span>")
        .html(name + ", email: ")
        .appendTo("#list");

    $("<a></a><br>")
        .attr("href", "mailto:" + email)
        .html(email)
        .appendTo("#list");
}

function clearList(){
    $("#list").html("");
}
