module.exports = {
	name: 'daily',
    description: 'daily',
	execute(message, args, db) {
        const Discord = require('discord.js');
        const mysql = require('mysql');
        db.query('USE mydb');
        let sqlelel = 'SELECT * FROM users WHERE id =' + message.author.id  
        db.query(sqlelel,(error, results, fields) => {
		if (error) {
		  return console.error(error.message);
		}
        let res = JSON.parse(JSON.stringify(results));
        let rand = Math.floor((Math.random() * 100)) + res[0].waifupoints;
        const sql = "UPDATE `mydb`.`users` SET `waifupoints` = '"+ rand +"' WHERE (`id` ='"+ message.author.id +"');"
        db.query(sql,(error) => {
            if (error) {
              return console.error(error.message);
            }
        });
    });
	},
	};