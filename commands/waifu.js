module.exports = {
	name: 'waifu',
	description: 'waifu',
	execute(message, args, db) {
	const Discord = require('discord.js');
	let waifulist = require('./waifulist.json')
	let waifuid =   message.content.slice(8);
	if(waifuid > waifulist.laifu.length || waifuid == " "){
    message.reply("Sorry, but wifu with this id dosn't exist.")
	}
	else
	{
	waifulist.laifu[waifuid];
    let embed = new Discord.MessageEmbed()
		.setColor("#ff5e54")
		.setTitle(waifulist.laifu[waifuid].name)
		.setImage(waifulist.laifu[waifuid].img)
		.addField('Sex',waifulist.laifu[waifuid].sex)
		.addField('Anime/Manga',waifulist.laifu[waifuid].anime);
	message.channel.send(embed);
	}
	},
};