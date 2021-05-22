module.exports = {
	name: 'catch',
	description: 'catch',
	execute(message, args, db) {
		let waifulist = require('./waifulist.json')
		db.query('USE mydb');
		let sql = "SELECT * FROM waifubufor WHERE channel = "+ message.channel.id; 
		db.query(sql,(error, results, fields) => {
			if (error) {
				db.query(sql,(error) => console.error());
			}
			else
			{
				let content = message.content.slice(8)
				let res = JSON.parse(JSON.stringify(results));
				console.log(res)
				if(waifulist.laifu[res[0].waifuid].name.toLowerCase() == content.toLowerCase())
				{
					message.channel.send("you did it");
				}
				else
				{
					message.channel.send("Ziobro kurwo jebana");
				}
				
			}
		})
	},
	};