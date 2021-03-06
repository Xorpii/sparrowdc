const Discord = require("discord.js");

function wait(ms){var start = new Date().getTime();var end = start;while(end < start + ms) {end = new Date().getTime()}}

exports.run = async (client, message, args) => {
    const giveaways = require(client.dir + '/custom_modules/giveaways.js')
    message.delete()
    let messageID = args[0];

    let argsEmb = new Discord.RichEmbed()
    .setTitle('🚫 Please enter a valid message ID')
    .setColor(client.config.colour)
    .setDescription(`Usage - \`${client.config.prefix}gdelete <msgID>\``)
    .setFooter(`${client.config.serverName} Giveaways ➤ Command ran by ${message.author.username}`)

    if (!messageID) {const fail = await message.channel.send(argsEmb); wait(3000); fail.delete(); return}

    else {
        giveaways.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway deleted!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
}
} 