const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {//splashen
 if(!["787937477993955368", "764893494296051723","764893503934300160","764893501329637396",'764893484213075970','794285242974208020'].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`<a:Cros:788055287768678421>**Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.**<a:Cros:788055287768678421>`)  
let isim = args[1].charAt(0).replace("i", "İ").toUpperCase() + args[1].slice(1).toLowerCase();
  let uye = message.mentions.users.first();
  let yaş = args[2]
  let yetkili = message.author
  let tag = ayarlar.tag || ' '
  if(!uye) return message.channel.send(`İsmi değiştirilecek üyeyi belirtin.`)
  if(!yaş) return message.channel.send(`Üyenin yaşını yazın.`)
  if(!isim) return message.channel.send(`Üyenin ismini yazınız.`)
  if(isim.length > 12) return message.channel.send(`Üyenin ismi 12 harfi geçmemeli.`)
  if(yaş.length > 100) return message.channel.send(`Üyenin yaşı 100'ü geçemez.`)
  message.guild.members.cache.get(uye.id).setNickname(`${tag} ${isim} | ${yaş}`)
  message.channel.send(`<a:tick:792336214694166569> **${uye.username}**' in ismi başarıyla \` ${isim} | ${yaş} \` olarak değiştirildi.<a:tick:792336214694166569> `)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isim'],
    permLevel: 0
}

exports.help = {
    name: 'nick',
  
}//ꁚ
