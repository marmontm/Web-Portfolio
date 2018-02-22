var personModel = {
    idCount: 0,
    personList: new Array(),

    addItem: function(itemName){
        var newItem = {
            mId: this.idCount,
            mName: itemName
        };
        this.personList.push(newItem);
        console.log(new Date().toISOString() + " > Item added: #" + newItem.mId + ":\'" + newItem.mName + "\'");
        this.idCount++;
    },

    delItem: function(itemId){
        for (var i = 0; i < this.personList.length; i++){
            if (this.personList[i].mId == itemId){
                var nameFound = this.personList[i].mName;
                this.personList.splice(i, 1);
                console.log(new Date().toISOString() + " > Item deleted: #" + itemId + ":\'" + nameFound + "\'");
            }
        }
    }
}
