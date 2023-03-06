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
}

function Item(data) {
    this.name = data.name || "undifined" ,
    this.amount = 0,
    this.buy = data.buy || NaN,
    this.sell = data.sell || NaN,
    this.effect = []
    this.use = function() {};
}

function Creature(data) {
    this.name = data.name || "undifined",
    this.hp = data.hp || NaN,
    this.str = data.str || NaN,
    this.def = data.def || NaN
    this.dodge = data.dodge || NaN,
    this.crit = data.crit || NaN,
    this.takeDamage = function() {
        if (this.dodge < Math.random().toFixed(2)) {
            if ((player.stats.str - this.def) <= 0) {} else {
                this.hp -= (player.stats.str - this.def)
            }
        }
    };
    this.attack = function() {
        if (player.stats.dodge < Math.random().toFixed(2)) {
            if ((this.str - player.stats.def) <= 0) {} else {
                player.stats.hp -= (this.str - player.stats.def)
            }
        }
    };
    this.death = function() {};
}

function Quest(data) {
    this.name = data.name || "undifined",
    this.tier = data.tier || "undifined",
    this.questData = {
        started: false,
        done: false,
        redeemed: false,
        redeemable: false
    },
    this.location = data.location || "undifined"
    this.startQuest = function() {};
    this.getReward = function() {};
    this.trackRedeem = function() {};
}