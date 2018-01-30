var newPersonInput = document.getElementById("person-name");
var personItems = document.getElementsByClassName("person-item");
var dataUpdated = new Event("onDataChange");

var personController = {
    addPerson: function () {
        if (newPersonInput.value != "") {
            personModel.addItem(newPersonInput.value);
            newPersonInput.value = "";
            dispatchEvent(dataUpdated);
        }
    },

    delPerson: function () {
        for (var i = 0; i < personItems.length; i++){
            if (personItems[i].checked){
                personModel.delItem(personItems[i].value);
            }
        }
        dispatchEvent(dataUpdated);
    },

    firstRun: function () {
        this.
        personModel.init();
        dispatchEvent(dataUpdated);
    }
}


