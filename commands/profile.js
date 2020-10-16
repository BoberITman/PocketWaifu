module.exports = {
	name: 'me',
	description: 'me',
	execute(message, args, db) {
	const Discord = require('discord.js');
	const mysql = require('mysql');
	db.query('USE mydb');
	let sqlelel = 'SELECT * FROM users WHERE id =' + message.author.id  ;
	db.query(sqlelel,(error, results, fields) => {
		if (error) {
			db.query(sql,(error) => console.error());
		}
		else
		{
		console.log(results);
		let res = JSON.parse(JSON.stringify(results));
		console.log(res)
		let embed = new Discord.MessageEmbed()
		.setColor("#ff5e54")
		.setTitle(message.author.username)
		.setImage(message.author.avatarURL())
		.addField('Waifupoints',res[0].waifupoints)
		.addField('Tickets',res[0].tickets)
		.addField('MAL',res[0].malname);
	message.channel.send(embed);
	console.log(results);
		}
});
	},
};