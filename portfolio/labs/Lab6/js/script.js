$(document).ready(function () {
    // Event listeners
    $("#tb-search").keyup(function (ev) {
        ev.preventDefault();
        if (ev.keyCode === 13) {
            $("#btn-search").trigger("click");
        }
    });

    $("#btn-search").click(function (ev) {
        clearWall();

        var query = $("#tb-search").val();
        console.log(query);

        $.ajax({
            url: 'https://api.flickr.com/services/feeds/photos_public.gne',
            dataType: 'jsonp',
            data: {
                "tags": query,
                "format": "json" }
        });
    })
});

// Callback function from Flickr
function jsonFlickrFeed(json) {
    $.each(json.items, function(i, item) {
        $("<img />").attr("src", item.media.m).appendTo("#wall");
    });
}

function clearWall(){
    $("#wall").html("");
}
