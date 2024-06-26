module.exports = function Cart(cartOld) {
    this.items = cartOld.items || {};
    this.amount = cartOld.amount || 0;
    this.total = cartOld.total || 0;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
        }

        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.amount++;
        this.total += storedItem.item.price;
    }

    this.generateArray = function() {
        var arr = [];

        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};
