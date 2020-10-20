module.exports = {
	name: 'register',
	description: 'register',
	execute(message, args, db) {
		const Discord = require('discord.js');
        const mysql = require('mysql');
        let sql = "INSERT INTO `mydb`.`users` (`id`) VALUES ('"+message.author.id+"');"; 
        db.query(sql,(error, results, fields) => {
            if (error) {
                console.error();
            }
                message.channel.send("Acount has been created");
        });
    },
	};