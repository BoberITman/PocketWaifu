module.exports = {
	name: 'me',
	description: 'me',
	execute(message, args) {
	const Discord = require('discord.js');	
	let Id = message.author.id;
	let waifucount = 0;
	let coins = 3;
	let tickets = 4;
	let malname = '-';
	let embed = new Discord.MessageEmbed()
		.setColor("#ff5e54")
		.setTitle(message.author.username)
		.setImage(message.author.avatarURL())
		.addField('Coins',coins) 
		.addField('Tickets',tickets)
		.addField('MAL',malname);
	message.channel.send(embed);
	user.count().then(c => {
  	console.log("There are " + c + " projects!");
	})
	},
};