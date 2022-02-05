const Discord = require('discord.js');
const luffyy = require("quick.db")
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();

exports.run = (client, message, member) => {
  
   if (!message.member.roles.cache.has(ayarlar.dcyetkili)) return message.channel.send("**Bu Komutu Kullanmak İçin Yetkili Olmalısın!**")
  
  var üyeler = [
       luffyy.fetch(`katılımcı_${member.guild.id}`)
        ]
      var üye = üyeler[Math.floor(Math.random() * üyeler.length)];


       var luffyy = [
       luffyy.fetch(`katılımcı_${member.guild.id}`)
        ]
      var yetkili = luffyy[Math.floor(Math.random() * luffyy.length)];
  
luffyy.set(`sorusoran_${member.guild.id}`, yetkili.id)

  return message.channel.send(`**Soru Soran:** ${yetkili} \n **Soruyu Cevaplıcak:** ${üye} `)
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