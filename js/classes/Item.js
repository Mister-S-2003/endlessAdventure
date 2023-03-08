function Item(data) {
    this.name = data.name || "undifined" ,
    this.amount = 0
    this.buy = data.buy || 0,
    this.sell = data.sell || 0,
    this.effect = []
    this.use = function() {};
};

const woodSplinter = new Item({
    name: "Wood Splinter",
    buy: .2,
    sell: .05,
})