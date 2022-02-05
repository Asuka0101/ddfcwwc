const Discord = require('discord.js');
const luffyy = require("quick.db")
const client = new Discord.Client();

exports.run = (client, message) => {
  
  var üyeler = [
        db.fetch
        ]
      var üye = üyeler[Math.floor(Math.random() * üyeler.length)];


      var sorular = [
        '**Sevdiğin Kişiyi Söyle!',
        'Siz Çoğaltabilirsiniz Bu Şekilde'
        ]
      var doğruluk = sorular[Math.floor(Math.random() * sorular.length)];

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