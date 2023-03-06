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