const dialog = {
    hometown: {
        abigail: [
            "<p>Abigail:</p><p>Sure, here is the list of available quests.</p><br><div id='questList'><p>List of Quests:</p></div><br><p><a href=javascript:genText(diaAbigail[2],hometown.theAdventurersGuild.name)>Back</a></p>",
            "<p>Abigail:</p><p>There are 9 known tiers of threads in this world:</p><br><p id='tierF'>F - Treat to children</p><p id='tierE'>E - Treat to an adult</p><p id='tierD'>D - Treat to a group</p><p id='tierC'>C - Treat to a village</p><p id='tierB'>B - Treat to a town</p><p id='tierA'>A - Treat to a city</p><p id='tierS'>S - Treat to a country</p><p id='tierSS'>SS - Treat to a continent</p><p id='tierSSS'>SSS - Treat to the planet</p><br><p><a href=javascript:genText(diaAbigail[2],hometown.theAdventurersGuild.name)>Back</a></p>",
            "<p>Abigail:</p><p>Welcome to the Adventurers Guild! How can I help you?</p><p style='width: 500px; display: flex; justify-content: space-around;'><a href=javascript:seeQuests()>Quests</a><a href=javascript:genText(diaAbigail[1],hometown.theAdventurersGuild.name)>Treat Levels</a><a href=javascript:genText(narGuild[0],hometown.theAdventurersGuild.name)>Nevermind...</a></p>",
        ]
    }
}

const diaAbigail = dialog.hometown.abigail