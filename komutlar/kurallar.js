const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setTitle("Kurallar")
    .addField("1-Argo ve küfür kesinlikle yasaktır! ( oha,yuh,çüş,vb.) Kick Sebebidir.","2-Reklam Yapmak yasaktır yapanlar kicklenir.", false)
    .addField("3-1.şahıs hakkında konuşmak yasaktır.", "4-Bot  kullanmak yasaktır. Bot kullananlar kalıcı banlanır .", false)
    .addField("5-Oyuncuları tehdit eden gereksiz yere banlayan rolleri izinsiz değiştiren yetkililer banlanacaktır(tüm yetkililer dahil).","6-Hiç bir oyuncu diyerlerinden üstün yada küçük değildir", false)
    .addField("7-Yetkililerden izinsiz kimse birbirini banlamayacaktır","8-Yetkililer ile konuşulurken disiplinli ve saygılı konuşulacaktır", false)
    .addField("9-V.İ.P dahil kismse dicord chatine link atmayacak. oyun linki,youtube linki vb...(Möderatörlerden izin alınarak atılabilir).","10-Gereksiz SPAM yapan kişiler önce kick sonrasında devam ederse ban cezası alacaktır.", false)
    .addField("11-Din,irk ve mezhep ayrımı yapmak ban sebebidir","12-Merak ettiğiniz bir yer olursa Rehber(Asistan)'a söyleye bilirsiniz", false)
    .addField(,"13-2 uyarıda kick 4 uyarıda ban olur", false)
    .addField(":smile::smile:",":smile::smile:", false)

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
  aliases: ['Yasaklar','yasaklar',"kurallar"],
  permLevel: 0
};

exports.help = {
  name: 'Kurallar',
  description: 'Tüm komutları gösterir.',
  usage: 'Kurallar'
};
