//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA
const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!["787937477993955368", "764893494296051723","764893503934300160","764893501329637396",'764893484213075970','794285242974208020'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta \n`))


  let tag = "ꁚ";
  const booster = message.guild.roles.cache.get("756107569923227689").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setFooter ("Artius 🧡 Berat")
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`**<a:landyellow21:798939171871653919>Toplam Üye  ・ ${toplam}
  <a:landyellow21:798939171871653919>Aktif Üye ・ ${online}
  <a:landyellow21:798939171871653919>Taglı Üye ・ ${ttag}
  <a:landyellow21:798939171871653919>Booster Üye ・${booster}
  <a:landyellow21:798939171871653919>Sesteki Üye ・${ses}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}

//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X 