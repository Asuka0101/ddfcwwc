const Discord = require('discord.js');
const luffyy = require("quick.db")
const client = new Discord.Client();

exports.run = (client, message, member, args) => {
  

  
  
if (!message.member.voice.channel) return message.channel.send('**Bir Ses Kanalına Girmelisin!**')
if(message.member.voice.channel.members.size < 5) return message.channel.send("Oyunu Oynayabilmek İçin 5 Kişi Lazım!")///kaç kişi olduğunu değiştirebilirsiniz ben 5 yaptım
  



      var sorular = [
        '**Luffyyi Seviyormusun?**',
        'Siz Çoğaltabilirsiniz Bu Şekilde'
        ]
      var doğruluk = sorular[Math.floor(Math.random() * sorular.length)];

  return message.channel.send(`${message.author.id} Adlı Kullanıcı ${message.member.voice.channel.members.filter(a => a.id).random()} Adlı Katılımcıya Cesaret Sorusu Sordu. \n \n **Soru:** \`${doğruluk}\``)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'doğruluksoru',
};