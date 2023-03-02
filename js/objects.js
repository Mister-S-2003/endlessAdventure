function weapon(data) {
    this.id = data.id || NaN,
    this.name = data.name || "undifined" ,
    this.def = data.def || NaN,
    this.buy = data.buy || NaN,
    this.sell = data.sell || NaN,
    this.use = function() {
        equip(this)
    }
}

function shield(data) {
    this.id = data.id || NaN,
    this.name = data.name || "undifined" ,
    this.str = data.str || NaN,
    this.buy = data.buy || NaN,
    this.sell = data.sell || NaN,
    this.use = function() {
        equip(this)
    }
}

function armor(data) {
    this.id = data.id || NaN,
    this.name = data.name || "undifined" ,
    this.def = data.def || NaN,
    this.hp = data.hp || NaN,
    this.buy = data.buy || NaN,
    this.sell = data.sell || NaN,
    this.use = function() {}
}

function consume(data) {
    this.id = data.id || NaN,
    this.name = data.name || "undifined" ,
    this.buy = data.buy || NaN,
    this.sell = data.sell || NaN,
    this.use = function() {}
}