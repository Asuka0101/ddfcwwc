
const Discord = require("discord.js")
exports.run = async (client, message, args) => {


        const hakkında = new Discord.MessageEmbed()
            .setTitle('NOT')
        .setColor("#ffffff")
            .setDescription(`
Selam Dostlarım Ben Luffyy

Arkadaşlar Komutları Komutlar Menüsünden Öğrenebilirsiniz. 

**Gelelim Önemli Kısma;**

Arkadaşlar Soru Soranı Her Cevaptan Sonra Yapıyorsunuz! tekrar soru soran çıkar ve ya tekrar cevaplayan çıkarsa komutu tekrar kullanarak değiştirebilirsiniz!

Komutlarda Soruları Çoğaltabilirsiniz.

Malesefki Kişi İstediği Kısımda Soru Sorulmasını Ayarlayamadım.

İyi Kullanmalar Dilerim!

            
            
            
            `)
        
        message.channel.send(hakkında)
}
      

exports.conf = {aliases: []}
exports.help = {
    name: "not",
}