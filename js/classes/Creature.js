function Creature(data) {
    this.name = data.name || "undifined",
    this.hp = data.hp || 0,
    this.str = data.str || 0,
    this.def = data.def || 0
    this.dodge = data.dodge || 0,
    this.crit = data.crit || 0,
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
};