module.exports = {
	name: 'me',
	description: 'me',
	execute(message, args, user) {
	const Discord = require('discord.js');	
	let Id = message.author.id;
	let waifucount = 0;
	let coins = 0;
	let tickets = 0;
	let malname = '-';
	user.findOrCreate({where: {IDD: Id}, defaults: {coins: 0, tickets:0, malname: 'Not set'}})
	.then(([user]) => {
    coins = user.get('coins');
    tickets = user.get('tickets');
    malname = user.get('malname');
    })
	let embed = new Discord.MessageEmbed()
		.setColor("#ff5e54")
		.setTitle(message.author.username)
		.setImage(message.author.avatarURL())
		.addField('Coins',coins)
		.addField('Tickets',tickets)
		.addField('MAL',malname);
	message.channel.send(embed);
	user.count().then(c => {
  	console.log("There are " + c + " projects!")
	})
	},
};