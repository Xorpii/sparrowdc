const Discord = require("discord.js");

module.exports = (client, member) => {

    var d = new Date,
    dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

       user = client.users.get(`${member.id}`)

       var joinLeaveChannel = member.guild.channels.find(x => x.name === client.config.joinLeaveChannel)
       if(!joinLeaveChannel){var joinLeaveChannel = member.guild.channels.find(x => x.id === client.config.joinLeaveChannel)}
   
       if(client.config.joinLeaveMessage === "on"){
       let embed = new Discord.RichEmbed()
           .setTitle(`👋 **Thanks for visiting ${client.config.serverName}** 😢`)
           .setDescription(`Bye ${member}!`)
           .setColor(client.config.colour)
           .addField(client.config.leaveMsgLine1,client.config.leaveMsgLine2)
           .setFooter(client.config.footer)
           .setThumbnail((user.displayAvatarURL))
           .setTimestamp(member.joinedTimestamp)
           joinLeaveChannel.send(embed)
       }


    var logChannel = member.guild.channels.find(x => x.name === client.config.logChannel)
    if(!logChannel){var logChannel = member.guild.channels.find(x => x.id === client.config.logChannel)}

    const log = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle(`🗒 User Leave`)
        .setDescription(`**User** - ${member}`)
        .setTimestamp(dformat)
    logChannel.send(log)
  };