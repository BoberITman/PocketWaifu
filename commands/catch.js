module.exports = {
	name: 'catch',
	description: 'catch',
	execute(message, args, user) {
	    const Discord = require('discord.js');
		const waifu = message.content.slice(7);
		message.channel.send("The "+waifu+" isn't waifu, you fucking weeboo.")
	},
	};