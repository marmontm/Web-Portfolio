var itemList = document.getElementById("list");
var itemAddInput = document.getElementById("person-name");

function addPerson()
{
    var newItem = itemAddInput.value;

    if (newItem != "") {
        itemList.innerHTML += "> " + itemAddInput.value + "<br>";
        itemAddInput.value = null;
    }
}
