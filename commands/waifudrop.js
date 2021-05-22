module.exports = {
	name: 'drop',
	description: 'drop',
	execute(message, db) {
        const waifulist = require('./waifulist.json')
        const Discord = require('discord.js');
        const mysql = require('mysql');
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
let command = "INSERT IGNORE INTO `mydb`.`waifubufor` (`channel`) VALUES ('"+message.channel.id+"');"; 
let command2 = "UPDATE `mydb`.`waifubufor` SET `waifuid` = '"+ rand +"' WHERE (`channel` ='"+ message.channel.id +"');"
db.query(command);
db.query(command2);
}
};