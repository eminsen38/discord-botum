const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setTitle("Komutlar")
    .addField("1- !oyunsecmc = Minecarft rolünü ekler.", "2- !oyunsecpubg = Pubg rölünü ekler.", true)
    .addField("3- !oyunseclol = Lol rolünü ekler.", "4- !oyunseczula = Zula rolünü ekler.", true)
    .addField("5- !oyunseccs = Csgo rolünü ekler.", "6- !oyunsecmobil = Mobil rolünü ekler.", true)
    .addField("7- !temizle (sayı) = Sayı kadar mesaj siler.", "8- !ping = Botun Pingini Söler.", true)
    .addField("9- !yaz (metin) =Bota istediğinizi yazdırabilirsiniz.", "10- !avatar = Bot avatarını gösteririr.", true)
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
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
  aliases: ['komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'botyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'botyardım [komut]'
};
