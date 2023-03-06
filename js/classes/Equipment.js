function Equipment(data) {
    this.name = data.name || "undifined" ,
    this.str = data.str || NaN,
    this.def = data.def || NaN,
    this.buy = data.buy || NaN,
    this.sell = data.sell || NaN,
    this.unequip = function() {};
    this.use = function() {
        equip(this)
    };
};
