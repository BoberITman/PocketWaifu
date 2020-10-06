module.exports = {
	name: 'jp',
	description: 'jp',
    execute(message, db){
        const Discord = require('discord.js');
        let waifulist = require('./waifulist.json');
        let rand = waifulist.laifu.length;
        while(rand >  waifulist.laifu.length - 1)
        {
        rand = Math.floor((Math.random() * 100));
        }
        let embed = new Discord.MessageEmbed()
            .setColor("#ff5e54")
            .setTitle("Waifu appeared!!!")
		    .addField("Initials",waifulist.laifu[rand].initials)
		    .setImage(waifulist.laifu[rand].img);
        message.channel.send(embed);
        console.log('Jebać pis', rand);
    },
}