//libs
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, dbname, dbuser, dbpassword, waifu } = require('./config.json');
//Initialization
const client = new Discord.Client();
client.commands = new Discord.Collection();

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
 if(rand == 6) client.commands.get('jp').execute(message);
 //Commands
 if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);	
  const command = args.shift().toLowerCase();
  //Errors
 if (!client.commands.has(command)) return;
   try {
	client.commands.get(command).execute(message, args);
}  catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
}
);