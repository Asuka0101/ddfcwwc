const Discord = require('discord.js')
const db = require('croxydb')
const ayarlar = require("../ayarlar.json")


exports.run = (client, message, args) => {
  
  if (!message.member.roles.cache.has(ayarlar.dcyetkili)) return message.channel.send("**Bu Komutu Kullanmak İçin Yetkili Olmalısın!**")
  
  if(!args[0]) return message.channel.send('**Doğruluk Cesaretlilik Sistemini Açmak için ; **!dcsistem aç** kapatmak İçin; **!dcsistem kapat')
  
  if(args[0] === 'kapat') {
    if(db.fetch(`sistem`)) return message.channel.send('Sistem zaten kapalı')
    message.channel.send('Sistem Kapatıldı.')
    db.set(`sistem`, 'acik')
  }
  if(args[0] === 'aç'){
    if(!db.fetch(`sistem`)) return message.channel.send('Sistem zaten açık.')
    message.channel.send('Sistem Açıldı.')
    db.delete(`sistem`)
  }
  
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sistem'
}