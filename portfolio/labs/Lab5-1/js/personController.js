var newPersonInput = document.getElementById("person-name");
// var personItems = document.getElementsByClassName("person-item"); // Only used with classic JS
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
        // Classic JS:
        // for (var i = 0; i < personItems.length; i++){
        //     if (personItems[i].checked){
        //         personModel.delItem(personItems[i].value);
        //     }
        // }

        // With jQuery:
        $(".person-item:checkbox:checked").each(function (index) {
            personModel.delItem($(this).attr("value"));
        });

        dispatchEvent(dataUpdated);
    },

    clearList: function () {
        personModel.clearStorage();
        dispatchEvent(dataUpdated);
    },

    firstRun: function () {
        personModel.init();
        dispatchEvent(dataUpdated);
    }
}


