var itemList = document.getElementById("list");

var personView = {
    render: function () {
        itemList.innerHTML = null;

        for (var i = 0; i < personModel.getIdCount(); i++)
        {
            var myName = personModel.getItem(i);

            if (myName != null) {
                itemList.innerHTML += "<input class=\"person-item\" id=\"item" + i + "\" type=\"checkbox\" value=\"" + i + "\"><label for=\"item" + i + "\">" + myName + "</label><br>";
            }

        }

        console.log(new Date().toISOString() + " > UI updated");
    }
}

