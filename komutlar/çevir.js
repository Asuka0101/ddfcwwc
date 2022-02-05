const Discord = require('discord.js');
const database = require("quick.db")
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();

exports.run = async(client, message, member, args) => {
  
   if (!message.member.roles.cache.has(ayarlar.dcyetkili)) return message.channel.send("**Bu Komutu Kullanmak İçin Yetkili Olmalısın!**")
  
  
      var yetkili = `${message.member.voice.channel.members.filter(a => a.id).random()}`
  

  return message.channel.send(`**Soru Soran:** ${yetkili}`)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sorusoran',
};