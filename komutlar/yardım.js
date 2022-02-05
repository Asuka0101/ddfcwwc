
const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {

let prefix = ayarlar.prefix
        const hakkında = new Discord.MessageEmbed()
            .setTitle('NOT')
        .setColor("#ffffff")
            .setDescription(`
Selam Dostlarım Ben Luffyy

Arkadaşlar Komutları Komutlar Menüsünden Öğrenebilirsiniz. 

**Gelelim Önemli Kısma;**

Arkadaşlar Çevir Komutu Her Cevaptan Sonra Tekrar Kullanıyorsunuz! tekrar soru soran çıkar ve ya tekrar cevaplayan çıkarsa komutu tekrar kullanarak değiştirebilirsiniz!

Soru Soran ve Cevaplayayını Ayarlayan Doğruluk Cesaretlilik Sorumlusudur. \`ayarlar.json\` kısmında \`dcyetkili\` kısmına rol idsini koyun. yoksa çalışmaz!! 
**${prefix}çevir Komutu Soru Soranı ve Cevaplayanı Ayarlar!**

Ayrıca \`ayarlar.json\` Kanalından Dc Chatı Ayarlamayı Unutmayın!

Komutlarda Soruları Çoğaltabilirsiniz.

Malesefki Kişi İstediği Kısımda Soru Sorulmasını Ayarlayamadım. Soru Soran İstediği Tarzda Soru Soruyor

İyi Kullanmalar Dilerim!

            
            
            
            `)
        
        message.channel.send(hakkında)
}
      

exports.conf = {aliases: []}
exports.help = {
    name: "not",
}