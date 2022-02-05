const Discord = require('discord.js');
const luffyy = require("quick.db")
const client = new Discord.Client();

exports.run = (client, message, member) => {
  
let sorusoran = luffyy.fetch(`sorusoran_${yetkili.id}`)
  
  
if(!message.member.roles.cache.has(sorusoran)) return message.channel.send(`**Bu Komutu Kullanmak İçin Gerekli Yetkiniz Yok!**`)
  
  var üyeler = [
       luffyy.fetch(`katılımcı_${member.guild.id}`)
        ]
      var üye = üyeler[Math.floor(Math.random() * üyeler.length)];


      var sorular = [
        '**Sevdiğin Kişiyi Kim?',
        'Siz Çoğaltabilirsiniz Bu Şekilde'
        ]
      var doğruluk = sorular[Math.floor(Math.random() * sorular.length)];

  return message.channel.send(`${message.author.id} Adlı Kullanıcı ${üye} Adlı Katılımcıya Cesaret Sorusu Sordu. \n \n **Soru:** \`${doğruluk}\``)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cesaretsoru',
};