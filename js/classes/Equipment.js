function Equipment(data) {
    this.name = data.name || "undifined" ,
    this.str = data.str || 0,
    this.def = data.def || 0,
    this.buy = data.buy || 0,
    this.sell = data.sell || 0,
    this.unequip = function() {};
    this.use = function() {
        equip(this)
    };
};
