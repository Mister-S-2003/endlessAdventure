const narration= {
    hometown: {
        home: [
            "<p>The blistering sun shines in your eyes as you wake up, you're tired (like always). You can go <a href=javascript:genText(narOutside[0],hometown.thePlaza.name)>outside</a></p>",
            "<p>You are currently in your house go <a href=javascript:genText(narOutside[0],hometown.thePlaza.name)>outside</a>? Or go back to <a href=javascript:genText(narHome[0],hometown.yourHome.name)>sleep</a></p>"
        ],
        outside: [
            "<p>You are currently standing outside, go <a href=javascript:genText(narHome[1],hometown.yourHome.name)>inside</a>? You can also go to <a href=javascript:genText(narGuild[0],hometown.theAdventurersGuild.name)>the guild</a></p>"
        ],
        guild: [
            "<p>you are currently inside of the guild. you can either talk to the <a href=javascript:genText(diaAbigail[2],hometown.theAdventurersGuild.name)>quest master</a> or go back <a href=javascript:genText(narOutside[0],hometown.thePlaza.name)>outside</a>?</p>"
        ]
    }
}

const narHome = narration.hometown.home;
const narOutside = narration.hometown.outside;
const narGuild = narration.hometown.guild;