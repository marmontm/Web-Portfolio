function ShoppingModel()
{
    this.allItems = new Array();
    this.changeListeners = new Array();
    
    this.addNewItems = function(addable)
    {
        this.allItems.push(addable);
        this.notifyChange();
    }
    
    this.notifyChange = function()
    {
        this.changeListeners.forEach(function(changeListener){
            changeListener();
        });
    }
    
    this.addNewListener = function(newListener)
    {
        this.changeListeners.push(newListener);
    }
}