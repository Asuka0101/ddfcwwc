const discord = require('discord.js')
const luffyy = require('quick.db');

exports.run = async(client, message, args, member) => {



    let katılımcı = message.author
 
    luffyy.push(`dc.${katılımcı.id}`, { userID: katılımcı.id});

    message.channel.send("Başarıyla Oyuna Katıldın!")
      
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'katıl',
}