var newPersonInput = document.getElementById("person-name");
var personItems = document.getElementsByClassName("person-item");

var personController = {
    dataUpdated: new Event("onDataChange"),

    addPerson: function () {
        if (newPersonInput.value != "") {
            personModel.addItem(newPersonInput.value);
            newPersonInput.value = "";
            dispatchEvent(this.dataUpdated);
        }
    },

    delPerson: function () {
        for (var i = 0; i < personItems.length; i++){
            if (personItems[i].checked){
                personModel.delItem(personItems[i].value);
            }
        }
        dispatchEvent(this.dataUpdated);
    }
}
