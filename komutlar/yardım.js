const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, users, args) => {

    let yardım = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} - Kayıt Sistemi`)
    .setDescription(`**\`Kayıt Yaparken Dikkat Ediceğin Hususlar.\`  
    <a:1_:798316603212038165>- **Kayıt Yaparken İlk Önce Teyit Alman Gerekiyor **CONFİRM** Odalarında Ses Teyitini Alıp Ondan Sonra Aşşağıdaki adımları Uygulayınız.**
   
    <a:2_:798316690982174730>- **Ses Teyit Odalarına Girdiğinizde Tatlı Dilli Olun Gelir gelmez İnsanları Soğutmayın. \n Örnek: \n **__Sunucumuza Hoşgeldin__ - __İsim yaş alabilirmiyim__ - __Sormak İstediğiniz bir şey varmı__   - __Tekrardan Hoşgeldin__ -__İyi günler (geceler v.b)__ - __Kuralları Okumayı Unutmayın.__** 
    
    <a:3_:798316714416537631>- Aldığınız Teyite Göre Kayıt İşlemlerini Yapınız Bir Hata Olursa Üst Yetkili Arkadaşa Bildiriniz.
     \`Kayıt Komutları\`
    » \`.e/.k @ETİKET isim Yaş\`: **Kullanıcıyı Kayıt Etmenizi Sağlar.**
    » \`.top\`: **Toplam Teyit Sıralamasını Gösterir.**
    » \`.unregister\`: **Etiketlediğin Kullanıcıyı Kayıtsıza Atar.**
    » \`.isim\`: **Etiketlediğiniz Kullanıcnın İsmini Düzeltirsiniz.**
    » \`.isimler @Üye\`: **Kullanıcının İsimlerini Gösterir.**`)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
  .setFooter("Umarım Faydalı Olmuştur. Artius 💖")
  message.channel.send(yardım)
    
     
    
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kyardım', 'khelp'],
  permLevel: 0,
}

exports.help = {
      name: "kyardım"
  
}