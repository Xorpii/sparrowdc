const Discord = require("discord.js");

module.exports = (client, emoji) => {
    
    var d = new Date,
    dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

    var logChannel = emoji.guild.channels.find(x => x.name === client.config.logChannel)
    if(!logChannel){var logChannel = emoji.guild.channels.find(x => x.id === client.config.logChannel)}

    const log = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle(`🗒 Emoji Deleted`)
        .setDescription(`**Emoji** - ${emoji}`)
        .setTimestamp(dformat)
    logChannel.send(log)
  };