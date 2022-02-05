
const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {

let prefix = ayarlar.prefix
    
        const hakkında = new Discord.MessageEmbed()
            .setTitle('Komutlar')
        .setColor("#ffffff")
        .setFooter("Luffyy Was Here!")
            .setDescription(`

**${prefix}cesaretsoru ::** __Random Birine Cesaret Sorusu Sorur.__
**${prefix}doğruluksoru ::** __Random Birine Doğruluk Sorusu Sorur.__
**${prefix}çevir ::** __Soru Soranı Ayarlarsınız.__
**${prefix}not ::** __Kesinlikle Okuyun Acayip Önemli.__
            
            
            
            `)
        
        message.channel.send(hakkında)
}
      

exports.conf = {aliases: []}
exports.help = {
    name: "yardım",
}