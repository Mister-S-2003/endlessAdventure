function Quest(data) {
    this.name = data.name || "undifined",
    this.tier = data.tier || "undifined",
    this.goal = data.goal || "undifined"
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
};

//guild quests
const slimeHunterQuest = new Quest({
    name: "Slime Hunter", 
    tier: "F", goal: "slay 10 slimes", 
    location: "Hometown - The adventurers guild"
});

const slimeGathererQuest = new Quest({
    name: "Slime Gatherer", 
    tier: "F", 
    goal: "gather 10 slime chunks", 
    location: "Hometown - The adventurers guild"
});

const legendarySlimeQuest = new Quest({
    name: "Legendary Slime", 
    tier: "F", 
    goal: "slay a Rainbow slime", 
    location: "Hometown - The adventurers guild"
});

const acidSlimeQuest = new Quest({
    name: "Acid Slime", 
    tier: "E", 
    goal: "slay an Acid slime", 
    location: "Hometown - The adventurers guild"
});