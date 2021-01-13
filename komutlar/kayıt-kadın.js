const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["787937477993955368", "764893494296051723","764893503934300160","764893501329637396",'764893484213075970','794285242974208020'].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`<a:Cros:788055287768678421>**Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.**<a:Cros:788055287768678421>`)
  
const kadin = message.guild.roles.cache.find(r => r.id === "764893484959137793")
const xx = message.guild.roles.cache.find(r => r.id === "792330634441916467")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "764893484213075970")
const reglog = message.guild.channels.cache.find(c => c.id === "787910419074252830")
const genelchat = message.guild.channels.cache.find(g => g.id === "764893647618965514")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`**<a:Cros:788055287768678421>Kayıt Edeceğim Kullanıcıyı Belirt.<a:Cros:788055287768678421>**`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
const x = message.guild.member(member)

let tag = "ꁚ"
let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(`Bir İsim Belirt`)
if(!yas) return message.channel.send(`Bir Yaş Belirt`)

let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.kadin`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('✅')
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kadin)
x.roles.add(xx)
x.roles.remove(kayıtsız)
//
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kadin)
x.roles.add(xx)
x.roles.remove(kayıtsız)


genelchat.send(`**<a:Prisma:792357782896377866> Aramıza Hoşgeldin** <@${member.id}>**,Umarım Keyifli Vakitler Geçirirsin İyi Eğlenceler.** `)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kadın", "k", "woman", "girl", "kız"],
    permLevel: 0
};

exports.help = {
    name: "kadın"
}

