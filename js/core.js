window.onload = setStats();

const divCount =  document.querySelectorAll("*[id]")
console.log(divCount);

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
    curLocation.innerHTML = locHome[0]
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
    text.innerHTML = diaAbigail[0]+ "<br><p>List of quests:</p>";
    for (let i = 0; i < hometownQuest.length; i++) {
        if (hometownQuest[i].completed != true) {
            if (hometownQuest[i].unlocked != false) {
                text.innerHTML += "<p>"+hometownQuest[i].name+" TIER: "+hometownQuest[i].tier+"</p>"
            }
        } else {
            text.innerHTML += "<p style='text-decoration: line-through;'>"+hometownQuest[i].name+" TIER: "+hometownQuest[i].tier+"</p>"
        }
    }
    text.innerHTML += "<br><p><a href=javascript:genText(diaAbigail[2],locHome[2])>Back</a></p>"
}