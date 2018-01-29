var personModel = {
    idCount: 0,

    personList: new Array(),

    addItem: function(itemName){
        var newItem = {
            mId: this.idCount,
            mName: itemName
        }
        this.personList.push(newItem);
        this.idCount++;
    },

    delItem: function(itemId){
        console.log(itemId);
        for (var i = 0; i < this.personList.length; i++){
            if (this.personList[i].mId == itemId){
                this.personList.splice(i, 1);
            }
        }
    }
}
