module.exports = 
{
	name: 'help',
    description: 'help',
    execute(message, args, db) 
    {
    const discord = require('discord.js');
    let embed = new discord.MessageEmbed()
    .setTitle('Help')
    .addField("w.me","show profile info")
    .addField("w.register","register to waifubot database")
    .addField("w.waifu <id>", "shows waifu")
    .addField("w.daily", "daily waifupoints rolle");
    message.channel.send(embed);
    }
}