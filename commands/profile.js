module.exports = {
	name: 'me',
	description: 'me',
	execute(message, args) {
	const Discord = require('discord.js');	
	const sequelize = require('sequelize')
	let Id = message.author.id;
	let waifucount = 0;
	let coins = 3;
	let tickets = 4;
	let malname = '-';
	let USER = user.findOrCreate({where: {IDD: Id}, defaults: {coins: 1, tickets:1, malname: 'Not set'}});
		coins = USER.getDataValue('IDD');
		console.log(USER.IDD);
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