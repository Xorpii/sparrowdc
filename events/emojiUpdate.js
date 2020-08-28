const Discord = require("discord.js");

module.exports = (client, oldEmoji, newEmoji) => {
    
    var d = new Date,
    dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

    var logChannel = message.guild.channels.find(x => x.name === client.config.logChannel)
    if(!logChannel){var logChannel = message.guild.channels.find(x => x.id === client.config.logChannel)}

    const log = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle(`🗒 Emoji Updated`)
        .setDescription(`**Old Emoji** - ${oldEmoji}\n**New Emoji** - ${newEmoji}`)
        .setTimestamp(dformat)
    logChannel.send(log)
  };