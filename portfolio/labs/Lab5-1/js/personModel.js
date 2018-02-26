var personModel = {
    idCount: 0,
    idCountStr: "idcount",
    itemIdPrefix: "item",

    init: function(){
        if (typeof(Storage) !== "undefined") {
            if ((localStorage.getItem(this.idCountStr) != null) && (localStorage.getItem(this.idCountStr) >= 0)) {
                this.idCount = localStorage.getItem(this.idCountStr);
            }
            else {
                localStorage.setItem(this.idCountStr, this.idCount.toString());
            }
        } else {
            alert("Access to local storage failed. Unable to read/write data.");
        }


    },

    getIdCount: function () {
        return this.idCount;
    },

    getItem: function(itemId){
        return localStorage.getItem(this.itemIdPrefix + itemId.toString());
    },

    addItem: function(itemName){
        // Add item to storage
        localStorage.setItem(this.itemIdPrefix + this.idCount.toString(), itemName);

        // Log action into console
        console.log(new Date().toISOString() + " > Item added: #" + this.idCount + ":\'" + itemName + "\'");

        // Increment ID count
        this.idCount++;
        localStorage.setItem(this.idCountStr, this.idCount.toString());
    },

    delItem: function(itemId){
        // Get item name for logging
        var nameFound = localStorage.getItem(this.itemIdPrefix + itemId.toString());

        // Delete item from storage
        localStorage.removeItem(this.itemIdPrefix + itemId.toString());

        // Log action into console
        console.log(new Date().toISOString() + " > Item deleted: #" + itemId + ":\'" + nameFound + "\'");
    },

    clearStorage: function () {
        if(confirm("Do you want to reset data?\nThis action is irreversible.")){
            localStorage.clear();
        }
    }
}
