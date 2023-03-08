window.onload = setStats();

function setStats() {
    //basics
    charName.innerHTML = player.basic.name;
    charGold.innerHTML = player.basic.gold;
    charLvl.innerHTML = player.basic.lvl;
    charWeapon.innerHTML = player.basic.shield;
    charShield.innerHTML = player.basic.weapon;
    charArmor.innerHTML = player.basic.armor;
    //stats
    charHp.innerHTML = player.stats.hp;
    charDef.innerHTML = player.stats.def;
    charTier.innerHTML = player.stats.tier;

    startGame()
}

function startGame() {
    text.innerHTML = narHome[0];
    curLocation.innerHTML = yourHome.name
}

function setAttributes(className) {
    player.stats.hp = className.hp;
    charHp.innerHTML = player.stats.hp;
    player.stats.def = className.def;
    charDef.innerHTML = player.stats.def;
}

function genText(curText, curLoc) {
    curLocation.innerHTML = curLoc;
    text.innerHTML = curText;
}

function seeQuests() {
    text.innerHTML = diaAbigail[0];
}