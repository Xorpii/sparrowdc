const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()

    let bot = new Discord.RichEmbed()
        .setAuthor("Zeltux","https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setTitle("Zeltux")
        .setThumbnail("https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setColor(`#FF0062`)
        .setDescription("This server uses Zeltux, a multipurpose discord bot that is built with lots of features.\n\nCheck out [us on github](https://github.com/Craftymatt2/Zeltux) to purchase a copy for yourself.")
        .setFooter(`© Zeltux | Owned by Matt | Developed by Matt, Azono & MCThunder\n${client.config.serverName} Utilities ➤ Command ran by ${message.author.username}`,"https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")

    message.channel.send(bot)
}