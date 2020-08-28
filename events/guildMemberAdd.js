const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./data/udb.sqlite');

module.exports = (client, member) => {
    
    autoRoles = client.config.autoRoles
    
    autoRoles.forEach(r => {
    let role = member.guild.roles.find(role => role.name === r)
    if(!role){console.log(`\x1b[31mMissing ${r} role!`)} else {member.addRole(role)}
    });

    user = client.users.get(`${member.id}`)

    var joinLeaveChannel = member.guild.channels.find(x => x.name === client.config.joinLeaveChannel)
    if(!joinLeaveChannel){var joinLeaveChannel = member.guild.channels.find(x => x.id === client.config.joinLeaveChannel)}

    if(client.config.joinLeaveMessage === "on"){
    let embed = new Discord.RichEmbed()
        .setTitle(`👋 **Welcome To ${client.config.serverName}** 🙂`)
        .setDescription(`Welcome ${member}!`)
        .setColor(client.config.colour)
        .addField(`${client.config.welcomeMsgLine1}`,`${client.config.welcomeMsgLine2}`)
        .setFooter(client.config.footer)
        .setThumbnail((user.displayAvatarURL))
        .setTimestamp(member.joinedTimestamp)
        joinLeaveChannel.send(embed)
    }

    var logChannel = member.guild.channels.find(x => x.name === client.config.logChannel)
    if(!logChannel){var logChannel = member.guild.channels.find(x => x.id === client.config.logChannel)}

    const log = new Discord.RichEmbed()
        .setColor(client.config.colour)
        .setTitle(`🗒 User Join`)
        .setDescription(`**User** - ${member}`)
        .setTimestamp(member.joinedTimestamp)
    logChannel.send(log)
    
    if(client.config.inviteSystem === "on") {
      member.guild.fetchInvites().then(guildInvites => {
          const ei = client.invites[member.guild.id]
          client.invites[member.guild.id] = guildInvites
          const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses)
          const inviter = client.users.get(invite.inviter.id)
          inviteCode = new Discord.RichEmbed()
            .setColor(client.config.colour)
            .setDescription(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}.
                             This invite was used ${invite.uses} times since its creation.`)
          logChannel.send(inviteCode)
      
          let myinvites = sql.prepare('SELECT * FROM invites WHERE id=?').get(inviter.id);
          if (!myinvites) { 
            myinvites = { id: `${inviter.id}`, user: inviter.id, invites: 0}
          }
          myinvites.invites++;
          const insert = sql.prepare(`INSERT OR REPLACE INTO invites (id, user, invites) VALUES (@id, @user, @invites);`)
          insert.run(myinvites)
        })
    }



  };