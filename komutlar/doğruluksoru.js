const Discord = require('discord.js');
const database = require("croxydb")
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();

exports.run = (client, message, member, args) => {


let kanal = ayarlar.dcchat

  
  if(message.channel.id !== kanal) return message.channel.send(`** Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!**`)
  
  
if (!message.member.voice.channel) return message.channel.send('**Bir Ses Kanalına Girmelisin!**')
if(message.member.voice.channel.members.size < 2) return message.channel.send("Oyunu Oynayabilmek İçin 5 Kişi Lazım!")///kaç kişi olduğunu değiştirebilirsiniz ben 5 yaptım
  



      var sorular = [
        '**Luffyyi Seviyormusun?**',
        'Siz Çoğaltabilirsiniz Bu Şekilde'
        ]
      var doğruluk = sorular[Math.floor(Math.random() * sorular.length)];
  
  let üye = database.fetch(`sorusorulan_${message.guild.id}`)

  return message.channel.send(`<@!${message.author.id}> Adlı Kullanıcı ${message.member.voice.channel.members.filter(a => a.id !== message.author.id).random()} Adlı Katılımcıya Cesaret Sorusu Sordu. \n \n **Soru:** \`${doğruluk}\``)
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