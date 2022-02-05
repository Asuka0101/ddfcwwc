const Discord = require('discord.js');
const luffyy = require("quick.db")
const client = new Discord.Client();

exports.run = (client, message, member) => {
  
  var üyeler = [
       luffyy.fetch(`katılımcı_${member.guild.id}`)
        ]
      var üye = üyeler[Math.floor(Math.random() * üyeler.length)];


      var sorular = [
        '**En Sevdiğin Kişi?**',
        'Siz Çoğaltabilirsiniz Bu Şekilde'
        ]
      var doğruluk = sorular[Math.floor(Math.random() * sorular.length)];

  return message.channel.send(`${message.author.id} Adlı Kullanıcı ${üye} Adlı Katılımcıya Doğruluk Sorusu Sordu. \n \n **Soru:** \`${doğruluk}\``)
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