const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const queue = new Map();

const coolDown = new Set();

function wait(ms){var start = new Date().getTime();var end = start;while(end < start + ms) {end = new Date().getTime()}}

module.exports = async (client, message) => {
    if (message.author.bot) return;

    // Setup
    theMessage = message.content.toLowerCase()
    desc = ""
    let missing = new Discord.RichEmbed()
      .setAuthor("Zeltux Error","https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
      .setTitle("⚠ Error - Missing Features ⚠")
      .setColor(`#FF0062`)
      .setFooter("© Zeltux | Developed By Matt","https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
  
    if(client.config.verificationSystem === "on"){
      if(!message.guild.channels.find(x => x.name === client.config.verificationChannel)){
        if(!message.guild.channels.find(x => x.id === client.config.verificationChannel))
        desc += "- A Verification Channel\n"}}
    if(client.config.verificationSystem === "on"){
      if(!message.guild.roles.find(x => x.name === client.config.verificationRole)){
        if(!message.guild.roles.find(x => x.id === client.config.verificationRole))
        desc += "- A Verification Role\n"}}

    if(!message.guild.channels.find(x => x.name === client.config.logChannel)){
      if(!message.guild.channels.find(x => x.id === client.config.logChannel))
      desc += "- A Log Channel\n"}

    if(client.config.joinLeaveMessage === "on"){
      if(!message.guild.channels.find(x => x.name === client.config.joinLeaveChannel)){
        if(!message.guild.channels.find(x => x.id === client.config.joinLeaveChannel))
        desc += "- A Welcome Channel\n"}}

    if(!message.guild.channels.find(x => x.name === client.config.reportChannel)){
      if(!message.guild.channels.find(x => x.id === client.config.reportChannel))
      desc += "- A Report Channel\n"}
    if(!message.guild.channels.find(x => x.name === client.config.suggestionChannel)){
      if(!message.guild.channels.find(x => x.id === client.config.suggestionChannel))
      desc += "- A Suggestions Channel\n"}
    if(!message.guild.channels.find(x => x.name === client.config.bugChannel)){
      if(!message.guild.channels.find(x => x.id === client.config.bugChannel))
      desc += "- A Bug Report Channel\n"}

    if(client.config.levelSystem === "on"){
      if(!client.config.levelChannel === "current"){
      if(!message.guild.channels.find(x => x.name === client.config.levelChannel)){
        if(!message.guild.channels.find(x => x.id === client.config.levelChannel))
        desc += "- A Level-up Message Channel\n"}}}

    if(client.config.applicationSystem === "on"){
      if(!client.config.applicationChannel === "current"){
      if(!message.guild.channels.find(x => x.name === client.config.applicationChannel)){
        if(!message.guild.channels.find(x => x.id === client.config.applicationChannel))
        desc += "- An Application Channel\n"}}}

    if(client.config.applicationSystem === "on"){
      if(!client.config.applicationChannel === "current"){
      if(!message.guild.channels.find(x => x.name === client.config.applicationChannel)){
        if(!message.guild.channels.find(x => x.id === client.config.applicationChannel))
        desc += "- An Application Category\n"}}}

    if(client.config.ticketSystem === "on"){
    if(!message.guild.channels.find(x => x.name === client.config.ticketCategory)){
      if(!message.guild.channels.find(x => x.id === client.config.ticketCategory))
      desc += "- A Ticket Category\n"}}

    if(!message.guild.roles.find(x => x.name === client.config.defaultRole)){
      if(!message.guild.roles.find(x => x.id === client.config.defaultRole))
      desc += "- A Default Role\n"}  
    if(!message.guild.roles.find(x => x.name === client.config.mutedRole)){
      if(!message.guild.roles.find(x => x.id === client.config.mutedRole))
      desc += "- A Muted Role\n"}  
    if(!message.guild.roles.find(x => x.name === client.config.staffRole)){
      if(!message.guild.roles.find(x => x.id === client.config.staffRole))
      desc += "- A Staff Role\n"} 
    if(!message.guild.roles.find(x => x.name === client.config.managementRole)){
      if(!message.guild.roles.find(x => x.id === client.config.managementRole))
      desc += "- A Management\n"} 
    if(!message.guild.me.hasPermission('ADMINISTRATOR')){
      desc += "- Bot's Administrator Permissions\n"
      console.log(`\x1b[41mERROR\x1b[40m \x1b[31m ${client.config.botName} Is missing the administrator permission, give it to it's role or the bot cannot fuunction!\n`)}
    if(desc != "" && theMessage != `${client.config.prefix}setup`){0
      missing.setDescription(`**Your server is missing the following features**\n\n${desc}\nRun **-setup** again to fix all of them at once.`)
      message.channel.send(missing)
      console.log(`\x1b[41mERROR\x1b[40m \x1b[31m There is an error with the setup of your Discord server!`)
      console.log(`\x1b[41mERROR\x1b[40m \x1b[31m Run \x1b[35m${client.config.prefix}bot \x1b[31min the server to check whats wrong.`)
      console.log(`\x1b[41mERROR\x1b[40m \x1b[31m Run \x1b[35m${client.config.prefix}setup \x1b[31min the server to fix all the issues.`)
      return;}
    // End Setup

    // New channels and roles system //
    // Channels
    var c = message.guild.channels.find(x => x.name === client.config.logChannel)
    client.logChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.logChannel);client.logChannel = c}

    var c = message.guild.channels.find(x => x.name === client.config.verificationChannel)
    client.verificationChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.verificationChannel);client.verificationChannel = c}

    var c = message.guild.channels.find(x => x.name === client.config.levelChannel)
    client.levelChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.levelChannel);client.levelChannel = c}

    var c = message.guild.channels.find(x => x.name === client.config.joinLeaveChannel)
    client.joinLeaveChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.joinLeaveChannel);client.joinLeaveChannel = c}

    var c = message.guild.channels.find(x => x.name === client.config.applicationChannel)
    client.applicationChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.applicationChannel);client.applicationChannel = c}
    
    var c = message.guild.channels.find(x => x.name === client.config.applicationCategory)
    client.applicationCategory = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.applicationCategory);client.applicationCategory = c}

    var c = message.guild.channels.find(x => x.name === client.config.ticketCategory)
    client.ticketCategory = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.ticketCategory);client.ticketCategory = c}

    var c = message.guild.channels.find(x => x.name === client.config.suggestionChannel)
    client.suggestionChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.suggestionChannel);client.suggestionChannel = c}

    var c = message.guild.channels.find(x => x.name === client.config.reportChannel)
    client.reportChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.reportChannel);client.reportChannel = c}

    var c = message.guild.channels.find(x => x.name === client.config.bugChannel)
    client.bugChannel = c
    if(!c){var c = message.guild.channels.find(x => x.id === client.config.bugChannel);client.bugChannel = c}
    
    // Roles
    var r = message.guild.roles.find(x => x.name === client.config.verificationRole)
    client.verificationRole = r
    if(!r){var r = message.guild.roles.find(x => x.id === client.config.verificationRole);client.verificationRole = r}

    var r = message.guild.roles.find(x => x.name === client.config.mutedRole)
    client.mutedRole = r
    if(!r){var r = message.guild.roles.find(x => x.id === client.config.mutedRole);client.mutedRole = r}

    var r = message.guild.roles.find(x => x.name === client.config.defaultRole)
    client.defaultRole = r
    if(!r){var r = message.guild.roles.find(x => x.id === client.config.defaultRole);client.defaultRole = r}

    var r = message.guild.roles.find(x => x.name === client.config.staffRole)
    client.staffRole = r
    if(!r){var r = message.guild.roles.find(x => x.id === client.config.staffRole);client.staffRole = r}

    var r = message.guild.roles.find(x => x.name === client.config.managementRole)
    client.managementRole = r
    if(!r){var r = message.guild.roles.find(x => x.id === client.config.managementRole);client.managementRole = r}

    // Check Perms Function
    client.checkPermissions = function(role){
      if(role === `s`){var myRole = client.staffRole.id}
      if(role === `m`){var myRole = client.managementRole.id}

      let noPerms = new Discord.RichEmbed()
          .setColor(client.config.colour)
          .setTitle(`🔒 You don't have permission for this command!`)
          .setFooter(`${client.config.serverName} Utilities ➤ Command ran by ${message.author.username}`)
    
      if(!message.member.roles.has(myRole)){message.channel.send(noPerms); return false}
      else{return true}
    }
    // Check Perms Function End

    // XP System
    if(client.config.levelSystem === "on") {
    if(client.config.levelChannel === "current"){
      var sendChannel = message.channel
    }
    else{
      var sendChannel = client.levelChannel
    }
    if (coolDown.has(message.author.id)) {
      let test = null
    } else {
      let score;
      if (message.guild) {
        score = client.getScore.get(message.author.id, message.guild.id);
        if (!score) {
          score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
        }
        score.points = score.points + (Math.floor(Math.random() * Math.floor(client.config.levelMaxPoints)))
        const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
        if(score.level < curLevel) {
          score.level++;
          var scoreEmbed = new Discord.RichEmbed()
            .setColor(client.config.colour)
            .setAuthor(`${client.config.serverName}`,client.user.avatarURL)
            .setTitle(`🎉 Congratulations **${message.author.username}**! You've leveled up!`)
            .addField(`🔽 Previous Level`, `**${curLevel-1}**`, true)
            .addField(`⏫ New Level`, `**${curLevel}**`, true)
            .addField(`🔢 Total Points`, `**${score.points}**`, true)
            .setFooter(`${client.config.serverName} Fun & Games ➤ Level up by ${message.author.username}`)
          sendChannel.send(scoreEmbed)
        }
        client.setScore.run(score);
      }
      coolDown.add(message.author.id);
      setTimeout(() => {
        coolDown.delete(message.author.id);
      }, client.config.levelCoolDown);
    }
    }
    // XP System End

    // Invite Filter
    if(client.config.inviteFilter === "on"){
      theMessage = message.content.toLowerCase()
      if(theMessage.includes("discord.gg")){
        var xrole = null
      client.config.inviteBypass.forEach(function(roles){
        if(roles === "m"){xrole = client.managementRole.id}
        if(roles === "s"){xrole = client.staffRole.id}
        })
        if(!message.member.roles.has(xrole) || xrole === null){
          message.delete()
          message.channel.send(new Discord.RichEmbed()
            .setColor(client.config.colour)
            .setDescription(`😮 Please Do Not Advertise!`)
            .setFooter(`${client.config.serverName} Moderation ➤ Message sent by ${message.author.username}`))
        const log = new Discord.RichEmbed()
            .setColor(client.config.colour)
            .setTitle(`🗒 Advertise`)
            .setDescription(`**User** - ${message.author}\n**Channel** - ${message.channel}\n**Message Content** - ${message}`)
            .setTimestamp(message.createdAt)
        client.logChannel.send(log)
        return }
        } 
    }
    // Invite Filter End

    // Swear Filter
    if(client.config.swearFilter === "on"){
      theMessage = message.content.toLowerCase()
      let swearWords = client.config.swearWords
      swearWords.forEach(function(swearWord){
      if(theMessage.includes(swearWord)){
        var xrole = null
      client.config.swearBypass.forEach(function(roles){
        if(roles === "m"){xrole = client.managementRole.id}
        if(roles === "s"){xrole = client.staffRole.id}
        })
        if(!message.member.roles.has(xrole) || xrole === null){
          message.delete()
          message.channel.send(new Discord.RichEmbed()
            .setColor(client.config.colour)
            .setDescription(`😮 Please Do Not Swear!`)
            .setFooter(`${client.config.serverName} Moderation ➤ Message sent by ${message.author.username}`))
        const log = new Discord.RichEmbed()
            .setColor(client.config.colour)
            .setTitle(`🗒 Swear`)
            .setDescription(`**User** - ${message.author}\n**Channel** - ${message.channel}\n**Message Content** - ${message}`)
            .setTimestamp(message.createdAt)
        client.logChannel.send(log)
        return }
        } 
        })
    }
    // Swear Filter End

    // Verify Command
    if(client.config.verificationSystem === "on"){
      if(message.channel === client.verificationChannel){
        if(message.content === `${client.config.prefix}verify`){
          message.member.addRole(client.verificationRole);return}
        else{
          if(!message.member.roles.has(client.managementRole.id)){}
          else{message.delete();return}}
    }}
    // Verify Command End

    if (message.content.indexOf(client.config.prefix) !== 0) return;


    // Music
    if (message.author.bot) return
    if (!message.content.startsWith(client.config.prefix)) return
    const serverQueue = queue.get(message.guild.id)
    if (message.content.startsWith(`${client.config.prefix}play `)) {
      if(client.config.core.music === "off") return
      execute(message, serverQueue)
      return
    } else if (message.content.startsWith(`${client.config.prefix}skip `)) {
      if(client.config.core.music === "off") return
      if(c === `fun`){if(client.config.core.fun === "off") return}
      skip(message, serverQueue)
      return
    } else if (message.content.startsWith(`${client.config.prefix}stop `)) {
      if(client.config.core.music === "off") return
      stop(message, serverQueue)
      return }
    // End Music

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command)

    if(!cmd) return

    try {
      cmd.run(client, message, args)
      return
    }
    catch{
      cmd(client, message, args)
      return
    }


// Music Functions
  async function execute(message, serverQueue) {
    const args = message.content.split(' ')
    let inVC = new Discord.RichEmbed()
      .setTitle("🚫 You need to be in a voice channel to play music!")
      .setFooter(`${client.config.serverName} Music ➤ Command ran by ${message.author.username}`)
      .setColor(client.config.colour)
    let iHaveNoperms = new Discord.RichEmbed()
      .setTitle("🚫 I need the permissions to join and speak in your voice channel!")
      .setColor(client.config.colour)
      .setFooter(`${client.config.serverName} Music ➤ Command ran by ${message.author.username}`)
    const voiceChannel = message.member.voiceChannel
    if (!voiceChannel) return message.channel.send(inVC)
    const permissions = voiceChannel.permissionsFor(message.client.user)
    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return message.channel.send(iHaveNoperms)}
    const songInfo = await ytdl.getInfo(args[1])
    const song = {
      title: songInfo.title,
      url: songInfo.video_url,}
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true,}
      queue.set(message.guild.id, queueContruct)
      queueContruct.songs.push(song)
      try {
        var connection = await voiceChannel.join()
        queueContruct.connection = connection
        play(message.guild, queueContruct.songs[0])
      } catch (err) {
        queue.delete(message.guild.id)
        return message.channel.send(err)}
    } else {
      serverQueue.songs.push(song)
      let added = new Discord.RichEmbed()
        .setTitle(`✅ ${song.title} has been added to the queue!`)
        .setColor(client.config.colour)
        .setFooter(`${client.config.serverName} Music ➤ Command ran by ${message.author.username}`)
      return message.channel.send(added)}}
  
  function skip(message, serverQueue) {
    let notInVC = new Discord.RichEmbed()
      .setTitle("🚫 You have to be in a voice channel to stop the music!")
      .setColor(client.config.colour)
      .setFooter(`${client.config.serverName} Music ➤ Command ran by ${message.author.username}`)
    let noSongToSkip = new Discord.RichEmbed()
      .setTitle("🚫 There is no song that I could skip!")
      .setColor(client.config.colour)
      .setFooter(`${client.config.serverName} Music ➤ Command ran by ${message.author.username}`)
    if (!message.member.voiceChannel) return message.channel.send(notInVC)
    if (!serverQueue) return message.channel.send(noSongToSkip)
    serverQueue.connection.dispatcher.end()}
  
  function stop(message, serverQueue) {
    let notInVC = new Discord.RichEmbed()
      .setTitle("🚫 You have to be in a voice channel to stop the music!")
      .setColor(client.config.colour)
      .setFooter(`${client.config.serverName} Music ➤ Command ran by ${message.author.username}`)
    if (!message.member.voiceChannel) return message.channel.send(notInVC)
    serverQueue.songs = []
    serverQueue.connection.dispatcher.end()}
  
  function play(guild, song) {
    const serverQueue = queue.get(guild.id)
    if (!song) {
      serverQueue.voiceChannel.leave()
      queue.delete(guild.id)
      return}
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
      .on('end', () => {
        serverQueue.songs.shift()
        play(guild, serverQueue.songs[0])})
      .on('error', error => {})
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)}



};