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
if(message.member.voice.channel.members.size < 2) return message.channel.send("Oyunu Oynayabilmek İçin 5 Kişi Lazım!")///kaç kişi olduğunu değiştirebilirsiniz ben 5 yaptım
  



      var sorular = [
        '**Luffyyi Seviyormusun?**',
        'Siz Çoğaltabilirsiniz Bu Şekilde',,
       ' 1- Görünmez olsan ilk olarak ne yapardın?',

'2- Herkesten sakladığın en büyük sırrın ne?',

'3- Sosyal medyada en son kimi stalkladın?',

'4- Üç dilek hakkın olsa bunları ne için kullanırdın?',

'5- Yarın piyango sana çıksa satın alacağın ilk şey ne olurdu?',

'6- Birini ekmek için hangi yalanı söylersin?',

'7- En son kime, ne yalan söyledin?',

'En utanç verici ilk buluşma anını anlat.',

'Issız bir adaya düşsen yanına alacağın 5 şey nedir?',,
'En son ne zaman, ne için ağladın?',
'Ömrünün sonuna kadar sadece tek bir şarkı dinleyebilecek olsan bu ne olurdu?',
'Ömrünün sonuna kadar sadece tek bir şey yiyebilecek olsan bu ne olurdu?',
'Bugüne kadar gördüğün en garip rüya neydi?',
'En büyük korkun ne?',
'İnsanların senin hakkındaki en büyük yanılgılarının ne olduğunu düşünüyorsun?',
'Hoşlanmadığın bir ortamdan kaçmak için hiç yalan söyledin mi?',
'En son ne için para harcadığına pişman oldun?',
'Hayatının en güzel/kötü gününü anlat.',
'Bu masadaki birinin yerine geçecek ve onun hayatını yaşayacak olsan bu kim olurdu?'


        ]
      var doğruluk = sorular[Math.floor(Math.random() * sorular.length)];

  return message.channel.send(`<@!${message.author.id}> Adlı Kullanıcı ${message.member.voice.channel.members.filter(a => a.id !== message.author.id).random()} Adlı Katılımcıya doğruluk sorusu sordu \n \n **Soru:** \`${doğruluk}\``)
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