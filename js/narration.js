const narration= {
    hometown: {
        home: [
            "<p>You wake up in your bed tired, like always. you can go <a href=javascript:genText(narOutside[0],locHome[1])>outside</a></p>",
            "<p>You are currently in your house go <a href=javascript:genText(narOutside[0],locHome[1])>outside</a>? Or go back to <a href=javascript:genText(narHome[0],locHome[0])>sleep</a></p>"
        ],
        outside: [
            "<p>You are currently standing outside, go <a href=javascript:genText(narHome[1],locHome[0])>inside</a>? You can also go to <a href=javascript:genText(narGuild[0],locHome[2])>the guild</a></p>"
        ],
        guild: [
            "<p>you are currently inside of the guild. you can either talk to the <a href=javascript:genText(diaAbigail[2],locHome[2])>quest master</a> or go back <a href=javascript:genText(narOutside[0],locHome[1])>outside</a>?</p>"
        ]
    }
}