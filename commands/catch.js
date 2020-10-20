module.exports = {
	name: 'catch',
	description: 'catch',
	execute(message, args, db, currentwaifu) {
		const Discord = require('discord.js');
		const wjson = require('./waifulist.json')
		let wn = message.content.slice(8);
		if(wn == wjson.laifu[currentwaifu].name)
		{
			message.reply("You catch"+wjson.laifu[currentwaifu].name+'congratulations')
		}

	},
	};