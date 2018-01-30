var itemList = document.getElementById("list");

var personView = {
    render: function () {
        itemList.innerHTML = null;
        for (var i = 0; i < personModel.personList.length; i++)
        {
            var myId = personModel.personList[i].mId;
            var myName = personModel.personList[i].mName;

            itemList.innerHTML += "<input class=\"person-item\" id=\"item" + myId + "\" type=\"checkbox\" value=\"" + myId + "\"><label for=\"item" + myId + "\">" + myName + "</label><br>";
        }
        console.log(new Date().toISOString() + " > UI updated");
    }
}

addEventListener("onDataChange", personView.render);
addEventListener("load", personView.render);
