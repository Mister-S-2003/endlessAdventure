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
    dodge: .05,
    crit: .01,
});

const rainbowSlime = new Creature({
    name: "Rainbow Slime",
    hp: 200,
    def: 10,
    str: 20,
    dodge: .1,
    crit: .05,
});

const acidSlime = new Creature({
    name: "Acid Slime",
    hp: 300,
    def: 20,
    str: 50,
    dodge: .2,
    crit: .1,
})