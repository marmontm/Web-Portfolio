var newPersonInput = document.getElementById("person-name");
var personItems = document.getElementsByClassName("person-item");

var personController = {
    addPerson: function () {
        if (newPersonInput.value != "") {
            personModel.addItem(newPersonInput.value);
            this.updateUI();
            newPersonInput.value = "";
        }
    },

    delPerson: function () {
        for (var i = 0; i < personItems.length; i++){
            if (personItems[i].checked){
                personModel.delItem(personItems[i].value);
            }
        }
        this.updateUI();
    },

    updateUI: function () {
        personView.render();
    }
}