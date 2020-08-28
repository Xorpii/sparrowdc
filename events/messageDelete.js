const Discord = require("discord.js");

module.exports = (client, message) => {
    if (message.author.bot) return;
    
    for(let cmd of client.commands){
        if(cmd[0] === `bot`){return}
    }

    var logChannel = message.guild.channels.find(x => x.name === client.config.logChannel)
    if(!logChannel){var logChannel = message.guild.channels.find(x => x.id === client.config.logChannel)}

    const log = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle(`🗒 Message Delete`)
        .setTimestamp(message.createdAt)
    try {
        log.setDescription(`**User** - ${message.author}\n**Channel** - ${message.channel}\n**Message Content** - ${message}`)
        logChannel.send(log)
    }
    catch {
        log.setDescription(`**User** - ${message.author}\n**Channel** - ${message.channel}\n**Message Content** - Error - Message too long`)
        logChannel.send(log)
    }
  };