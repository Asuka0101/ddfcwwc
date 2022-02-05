const Discord = require('discord.js');
const database = require("quick.db")
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();

exports.run = async(client, message, member, args) => {
  
   if (!message.member.roles.cache.has(ayarlar.dcyetkili)) return message.channel.send("**Bu Komutu Kullanmak İçin Yetkili Olmalısın!**")
  
  
  
 
   let db = await database.fetch(`dc.${katılımcı.id}`);
  let üyeler = db.map((data, index) => `**[<@!${data.userID}>]**`);
      var üye = üyeler[Math.floor(Math.random() * üyeler.length)];


        
  let luffyy = db.map((data, index) => `**[<@!${data.userID}>]**`);
      var yetkili = luffyy[Math.floor(Math.random() * luffyy.length)];
  


  return message.channel.send(`**Soru Soran:** ${yetkili} \n**Soruyu Cevaplıcak:** ${üye} `)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çevir',
};