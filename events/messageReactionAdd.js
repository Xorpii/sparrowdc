const Discord = require("discord.js");
const fs = require("fs");

module.exports = (client, reaction, user) => {
    let giveaways = require("../data/giveaways.json")
    let giveaway = giveaways.find(g => g.messageID == reaction.message.id)

    if (reaction.emoji.name == client.config.giveawayEmoji && giveaway && !user.bot) {
      giveaways
        .find(g => g.messageID == reaction.message.id)
        .reactions.push(user.id);
      fs.writeFile("../data/giveaways.json", JSON.stringify(giveaways), function(err) {
        if (err) console.log(err);
      });
    }
  };