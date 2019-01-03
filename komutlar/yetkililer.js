const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setTitle("Yetkiler ve Açıklamaları")
    .addField("1-Sunucu Sahibi: @Esat.","2-Möderatör:Tüm düzenden sorumlu kişi.", false)
    .addField("3-Rehber(Asistan):Gerekli konulara yardımcı kişi.", "4-V.İ.P: Özel kişi.", false)
    .addField("5-Mega Aktif:Mega Aktif kanalına girebilir,dosya ekleyebilir. ", "6-Aktif:Anlık davet oluşturabilir,mesaj geçmişini okuyabilir,tepki ekleyebilir.", false)
    .addField("7-Acemi:Harici emojileri kullanabilir.", "8-Yeni Üye:Kanalları görebilir,mesaj gönderebilir,konuşup bağlanabilir.", false)


    .setColor(0x00AE86)
    .setTimestamp()
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Yetkiler,yetkiler"],
  permLevel: 0
};

exports.help = {
  name: 'Yetkiler',
  description: 'Yetkileri Gösterir.',
  usage: 'Yetkiler'
};
