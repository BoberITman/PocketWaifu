//libs
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, dbname, dbuser, dbpassword, waifu } = require('./config.json');
const {Sequelize, DataTypes} = require('sequelize');
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
//Database
const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
  host: 'localhost',
  dialect: 'mysql'
});
//Database chek
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//Database model
const user = sequelize.define('users', {
  IDD: {
    type: DataTypes.STRING,
    allowNull: false
  },
  coins:DataTypes.INTEGER,
  tickets:DataTypes.INTEGER,
  malname:DataTypes.STRING
  },
  { 
  timestamps: false,
}
);
if(user.sync()) console.log('exist');
//Bot work
client.on('message', message => 
{
  //Waifu random
 let rand = Math.floor((Math.random() * 100) + 1);
 if(rand == 10) message.channel.send(waifu);
 //Commands
 if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);	
  const command = args.shift().toLowerCase();	
  //Errors
 if (!client.commands.has(command)) return;
   try {
	client.commands.get(command).execute(message, args, user);
}  catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
}
);
