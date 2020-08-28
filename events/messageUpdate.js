const Discord = require("discord.js");

module.exports = (client, oldMessage, newMessage) => {
    if (oldMessage.author.bot) return;

    var logChannel = newMessage.guild.channels.find(x => x.name === client.config.logChannel)
    if(!logChannel){var logChannel = newMessage.guild.channels.find(x => x.id === client.config.logChannel)}

    const log = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle(`🗒 Message Edit`)
        .setTimestamp(newMessage.createdAt)
    try{
        log.setDescription(`**User** - ${newMessage.author}\n**Channel** - ${newMessage.channel}\n**Message ID** - ${newMessage.id}\n**Old Message** - ${oldMessage}\n**New Message** - ${newMessage}`)
        logChannel.send(log)
    }
    catch{
        log.setDescription(`**User** - ${newMessage.author}\n**Channel** - ${newMessage.channel}\n**Message ID** - ${newMessage.id}\n**Old Message** - Error - Message too long\n**New Message** - Error - Message too long`)
        logChannel.send(log)
    }
  };