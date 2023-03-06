function Item(data) {
    this.name = data.name || "undifined" ,
    this.amount = 0,
    this.buy = data.buy || NaN,
    this.sell = data.sell || NaN,
    this.effect = []
    this.use = function() {};
};