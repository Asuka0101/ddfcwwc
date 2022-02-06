const Discord = require('discord.js');
const db = require("croxydb")
const ayarlar = require("../ayarlar.json")
const client = new Discord.Client();

exports.run = (client, message, member, args) => {
  
  if(db.fetch(`sistem`)) {
  if(message.author.id !== ayarlar.dcyetkili) {return message.channel.send('Şuanda Sistem Kapalıdır')}
}
  

let kanal = ayarlar.dcchat

  
if(message.channel.id !== kanal) return message.channel.send(`** Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!**`)
  
  
if (!message.member.voice.channel) return message.channel.send('**Bir Ses Kanalına Girmelisin!**')
if(message.member.voice.channel.members.size < -2) return message.channel.send("Oyunu Oynayabilmek İçin 5 Kişi Lazım!")///kaç kişi olduğunu değiştirebilirsiniz ben 5 yaptım
  
      var sorular = [
'Sevdiğin Kişi Kim?',
'Siz Çoğaltabilirsiniz Bu Şekilde',
'Bu masadan birinin senin yerine tweet/instagram gönderisi atmasına izin ver.',
'Bu masadan birinin senin yerine birine mesaj atmasına izin ver.',
'Bu masadan birinin taklidini yap ama kim olduğunu söyleme.',
'Herkesin önünde kendi kareografinle dans et.',
'Aile bireylerinden birini ara ve onu çok korkutacak bir şaka yap.',
'Bir dakika boyunca plank pozisyonunda dur.',
'Çok kötü çıktığını düşündüğün bir fotoğrafı sosyal medyada paylaş.',
'En son attığın 5 mesajı yüksek sesle oku.',
'Masadaki insanların en sevmediğin özelliklerini söyle.',
'Hoşlandığın kişinin en eski instagram gönderilerinden birini beğen.',
'Hakkında bir doğru ve bir yanlış bilgi paylaş. Masadakiler hangisinin doğru olduğunu tahmin etsin.',
'Gizli yeteneğini göster.',
'Rastgele bir numara çevir ve karşıdaki kişiye bir fıkra anlat.',
'En sevdiğin kıyafetlerinden birini bir arkadaşına hediye et.',
'Eski sevgilini ara ve onu çok özlediğini söyle.',
'Telefonunu bu masadan birine ver ve tüm gün boyunca gelen mesajları/aramaları o yanıtlasın.',
'Herkesin önünde en sevdiğin şarkıyı baştan sona söyle.',
'Instagramda karşına çıkan ilk 5 hikayeye cevap ver.',
'Sıradaki 5 dakika boyunca masadakiler ne derse onu yap.',
'Bir gün boyunca sadece arkadaşlarının zevkine göre giyin.,',
'qwdjqwhdjwqodqwhdıpqwdjoqwodljpqowşdjqw,',
'qwdjqwhdjwqodqwhdıpqwdjoqwodljpqowşdjqw,'
        ]
      var doğruluk = sorular[Math.floor(Math.random() * sorular.length)];
  


  return message.channel.send(`<@!${message.author.id}> Adlı Kullanıcı ${message.member.voice.channel.members.filter(a => a.id !== message.author.id).random()} Adlı Katılımcıya Cesaret Sorusu Sordu. \n \n **Soru:** \`${doğruluk}\``)
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