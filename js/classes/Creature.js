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
};

const dummie = new Creature({
    name: "Dummie",
    hp: 10,
    def: 10,
    str: 0,
    dodge: 0,
    crit: 0,
})

const slime = new Creature({
    name: "Slime",
    hp: 50,
    def: 5,
    str: 10,
    dodge: 0.05,
    crit: 0.01,
});