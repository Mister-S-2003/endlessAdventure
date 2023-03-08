function Location(data) {
    this.name = data.name || "undifined",
    this.enemies = data.enemies || [];
    this.dorp = data.drop || [];
};

//hometown
const hometown = {
    yourHome: new Location({
        name: "Hometown - Your house",
    }),
    thePlaza: new Location({
        name: "Hometown - The Plaza",
    }),
    theAdventurersGuild: new Location({
        name: "Hometown - The adventurers guild",
    }),
    westForest: new Location({
        name: "Hometown - Western Forest",
    }),
    eastMountains: new Location({
        name: "Hometown - Eastern Mountains",
    }),
    dock: new Location({
        name: "Hometown - Dock"
    }),
    beach: new Location({
        name: "Hometown - Beach"
    }),
}