const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("[BOT] Yeniden Başlatılıyor").then(msg => {
        console.log("[BOT] Yeniden Başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
