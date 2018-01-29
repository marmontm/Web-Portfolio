function ShoppingItem(itemName)
{
    this.name = itemName;
    this.price = undefined;
    this.eanCode = undefined;
    
    this.setPrice = function(price)
    {
        this.price = price;
    }
    
}