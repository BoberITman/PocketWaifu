//libs
const fs = require('fs');
const Discord = require('discord.js');
const waifulist = require('./commands/waifulist.json')
const mysql = require('mysql');
const { prefix, token, dbname, dbuser, dbpassword, host } = require('./config.json');
//Initialization
const client = new Discord.Client();
client.commands = new Discord.Collection();
//Database connection
let db = mysql.createConnection({
	host: host,
	user: dbuser,
	password: dbpassword
  });
  db.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
  });
//Command files 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands//${file}`);
	client.commands.set(command.name, command);
}
//Login
client.login(token);
client.once('ready', () => {
	console.log('Ready!');
});
//Bot work
client.on('message', message => 
{
  //Waifu random
 let rand = Math.floor((Math.random() * 100) + 1);
 console.log(rand);
 if(rand <= 10) 
 {
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
 }
 let currentwaifu = rand;
 //Commands	
 if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);	
  const command = args.shift().toLowerCase();
  //Errors
 if (!client.commands.has(command)) return;
   try {
	client.commands.get(command).execute(message, args, db, currentwaifu);
}  catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
}
);