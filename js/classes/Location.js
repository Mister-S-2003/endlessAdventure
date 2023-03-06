function Location(data) {
    this.name = data.name || "undifined",
    this.enemies = data.enemies || [];
    this.dorp = data.drop || [];
};

const yourHome = new Location({
    name: "Hometown - Your house",
});

const thePlaza = new Location({
    name: "Hometown - The Plaza",
});

const theAdventurersGuild = new Location({
    name: "Hometown - The adventurers guild",
    enemies: {
        dummie
    },
    drop: {

    }
})

const locations = {
    hometown: [
        "Hometown - Your house",
        "Hometown - The plaza",
        "Hometown - The adventurers guild",
        "Hometown - Western Forest",
        "Hometown - Eastern Mountains",
        "Hometown - Dock",
        "Hometown - Beach"
    ],
}