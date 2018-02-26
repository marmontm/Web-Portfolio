var itemList = document.getElementById("list");

var personView = {
    render: function () {
        itemList.innerHTML = null;

        for (var i = 0; i < personModel.getIdCount(); i++)
        {
            var myName = personModel.getItem(i);

            if (myName != null) {
                // Classic JS:
                // itemList.innerHTML += "<input class=\"person-item\" id=\"item" + i + "\" type=\"checkbox\" value=\"" + i + "\"><label for=\"item" + i + "\">" + myName + "</label><br>";

                // With jQuery:
                $("<input type='checkbox' class='person-item' />")
                    .attr("id", "item" + i)
                    .attr("value", i)
                    .appendTo("#list");

                $("<label /><br>")
                    .attr("for", "item" + i)
                    .html(myName)
                    .appendTo("#list");

            }

        }

        console.log(new Date().toISOString() + " > UI updated");
    }
}

