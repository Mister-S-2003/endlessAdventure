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
const slimeHunter = new Quest({
    name: "Slime Hunter", 
    tier: "F", goal: "slay 10 slimes", 
    location: "Hometown - The adventurers guild"
});

const slimeGatherer1 = new Quest({
    name: "Slime Gatherer 1", 
    tier: "F", 
    goal: "gather 10 slime chunks", 
    location: "Hometown - The adventurers guild"
});

const slimeGatherer2 = new Quest({
    name: "Slime Gatherer 2", 
    tier: "F", 
    goal: "gather 50 slime chunks", 
    location: "Hometown - The adventurers guild"
});

const legendarySlime = new Quest({
    name: "Legendary Slime", 
    tier: "F", 
    goal: "slay a Rainbow slime", 
    location: "Hometown - The adventurers guild"
});

const acidSlime = new Quest({
    name: "Acid Slime", 
    tier: "E", 
    goal: "slay an Acid slime", 
    location: "Hometown - The adventurers guild"
});

const acidRevenge = new Quest({
    name: "Acid Revenge", 
    tier: "E", 
    goal: "slay 5 Acid slimes", 
    location: "Hometown - The adventurers guild"
});