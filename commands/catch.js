module.exports = {
	name: 'catch',
	description: 'catch',
	execute(message, args, user) {
	    const Discord = require('discord.js');
		const waifu = message.content.slice(8);
		if(waifu == "") return;
		else
		{
		switch(waifu)
		{
		case 'Megumin':
		message.channel.send("she's only 14 you disgusting lolicon.");
		break;
		case 'MrMichal':
		message.channel.send("You catch "+waifu+", Congratulations!");
		break;
		default:
		message.channel.send("The "+waifu+" isn't waifu, you fucking weeboo.");
	    }
	}
	},
	};