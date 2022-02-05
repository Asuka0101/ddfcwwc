const disbut = require("discord-buttons")
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  if (message.author.bot) return;
        message.channel.send(`Data loading...`).then(async msj => {
            const botPing = (msj.createdTimestamp - message.createdTimestamp);
            msj.delete();
        const btn1 = new disbut.MessageMenuOption()
            .setLabel('Bot Hakkında')
            .setDescription("Bot hakkında kısmı")
            .setValue('1')
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Komutlar')
            .setDescription(`Komutları gösterir.`)
            .setValue('2')



        const menu = new disbut.MessageMenu()
        .addOptions(btn1, btn2, )
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")

        const hakkında = new Discord.MessageEmbed()
            .setTitle('NOT')
            .setDescription(`
Selam Dostlarım Ben Luffyy
Arkadaşlar Komutları Komutlar Menüsünden Öğrenebilirsiniz. 
**Gelelim Önemli Kısma;**
Arkadaşlar Soru Soranı Her Cevaptan Sonra Yapıyorsunuz! tekrar soru soran çıkar ve ya 
            
            
            
            `)
        const embed1 = new Discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: ` doğruluksoru`, value: `>>> Random Birine Doğruluk Sorusu Sorar._`, inline: false},
                {name: ` cesaretliliksoru`, value:`>>> Random Birine Cesaretlilik Sorusu Sorar._`, inline: false},
                {name: ` sorusoran`, value:`>>> Soru Soran Kişiyi Ayarlarsınız. (not kısmını okuyun!!!)_`, inline: false},
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
           
        let msg = await message.channel.send({ embed: hakkında, component: menu })


        const filter = (menu) => menu.clicker.user.id === message.author.id; //user filter (author only)
        const collector = message.createMenuCollector(filter, { time: 120000 });
        client.on("clickMenu", menu => {
            if(menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
            if (menu.values[0] === '1') {
                msg.edit({
                    embed: hakkında,
                })
            }
            if (menu.values[0] === '2') {
                msg.edit({
                    embed: embed1,
                })
            }
        })
        })
}
      
            
        
      

exports.conf = {aliases: []}
exports.help = {
    name: "yardım",
}