module.exports = {
	name: 'waifu',
	description: 'waifu',
	execute(message, args) {
	const Discord = require('discord.js');
	let waifulist = require('./waifulist.json')
	let waifuid =   message.content.slice(8);
	if(waifuid == 0) waifuid = 1;
	waifulist.laifu[waifuid];
    let embed = new Discord.MessageEmbed()
		.setColor("#ff5e54")
		.setTitle(waifulist.laifu[waifuid].name)
		.setImage(waifulist.laifu[waifuid].img)
		.addField('Birthday',waifulist.laifu[waifuid].birthday)
		.addField('Anime/Manga',waifulist.laifu[waifuid].anime);
	message.channel.send(embed);
	},
};