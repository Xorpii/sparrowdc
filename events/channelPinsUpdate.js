const Discord = require("discord.js");

module.exports = (client, channel, time) => {
    
    var logChannel = channel.guild.channels.find(x => x.name === client.config.logChannel)
    if(!logChannel){var logChannel = channel.guild.channels.find(x => x.id === client.config.logChannel)}

    const log = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle(`🗒 Channel Pins Updated`)
        .setDescription(`**Channel** - ${channel}\nA setting has been changed in ${channel}!\nCheck channel pins to find out more!`)
        .setTimestamp(time)
    logChannel.send(log)
  };