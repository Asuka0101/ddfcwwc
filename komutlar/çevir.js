const Discord = require('discord.js');
const database = require("quick.db")
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();

exports.run = async(client, message, member, args) => {
  
   if(message.channel.id !== ayarlar.dcchat) return message.channel.send(`** Bu komudu sadece <#${ayarlar.dcchat}> adlı kanalda kullanabilirsin!**`)
  
   if (!message.member.roles.cache.has(ayarlar.dcyetkili)) return message.channel.send("**Bu Komutu Kullanmak İçin Yetkili Olmalısın!**")
  
   
  
  if (!message.member.voice.channel) return message.channel.send('**Bir Ses Kanalına Girmelisin!**')
if(message.member.voice.channel.members.size < 2) return message.channel.send("Oyunu Oynayabilmek İçin 5 Kişi Lazım!")
  
      var yetkili = `${message.member.voice.channel.members.filter(a => a.id).random()}`
       var üye = `${message.member.voice.channel.members.filter(a => a.id).random()}`
  
     

  return message.channel.send(`**Soru Soran:** ${yetkili} \n **Soru Sorulan:** ${üye} \n\n\`Eğer Her 2 kısımda aynı kişiye denk geliyorsa tekrar komutu kullanın!\``)
  
  database.set(`sorusoran_${message.guild.id}`, yetkili.id)
  database.set(`sorusorulan_${message.guild.id}`, üye.id)
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