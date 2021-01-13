const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token);

  //-----------------------HOŞ-GELDİN-MESAJI----------------------\\     STG

client.on("guildMemberAdd", member => {  
    const kanal = member.guild.channels.cache.find(r => r.id === "787740564904869968");
    const register = "<@&764893494296051723> <@!645922946736455680> "
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = '<a:Cros:788055287768678421> Hesap Durumu: Güvenilir Değil <a:Cros:788055287768678421> '
  if (kurulus > 1296000000) kontrol = '<a:tick:792336214694166569> Hesap Durumu: Güvenilir Gözüküyor <a:tick:792336214694166569> '
    moment.locale("tr");
      const strigalog = new Discord.MessageEmbed()
.setTitle("Artius'a Hoşgeldin")      
.setThumbnail(member.user.avatarURL({dynamic: true}))
.setDescription("**<a:kebelek4:792357969844502558>  Hoşgeldin <@!" + member + "> Seninle Beraber \`" + member.guild.memberCount + "\` Kişiyiz.\n\n<a:uzi:767702135096999936> Müsait olduğunda Confirmed Odalarından Birine Geçip Kaydını Yaptırabilirsin. \n\n<a:Prisma:792357782896377866> <@&764893494296051723> seninle ilgilenicektir. \n\nHesabın Oluşturulma Tarihi:\n " + moment(member.user.createdAt).format("`YYYY DD MMMM dddd`") +  "\n"  + kontrol + "\n\n<a:stgtacyesil:788686606369816596> Tagımızı alarak `ꁚ` bize destek olabilirsin.**\n  ")
.setFooter("Ekip Alımı,Partner,Birleşme,Bot,Konser v.b Teklifleri Kabul Etmiyoruz.") 
.setColor("RANDOM")      
    kanal.send(strigalog)  
     kanal.send(register) 
  });
  
//-----------------------HOŞ-GELDİN-MESAJI----------------------\\     STG



//------------------------------------------------------------------------------------------------------------------------------------\\

client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("birkaç saniye önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
    const kytsz = member.guild.roles.cache.find(r => r.id === "764893484213075970") 
     var rol = member.guild.roles.cache.get("764893524620476457") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
     var kayıtsız = member.guild.roles.cache.get(kytsz) // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
     member.roles.add(rol)
     member.roles.remove(kytsz)

  member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
  setTimeout(() => {
  
  }, 1000)
  
  
     }
          else {
  
          }
      });

//------------------------------------------------------------------------------------------------------------------------------------\\


//-----------------------TAG-ROL----------------------\\     STG

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get('756106557263183894'); // Buraya Sunucu ID
  var uye = sunucu.members.cache.get(yeni.id);
  var tag = "ꁚ"; // Buraya Ekip Tag
  var tagrol = "764893483739643914"; // Buraya Ekip Rolünün ID
  var logKanali = "787910205434232882"; // Loglanacağı Kanalın ID

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
  
  if ((yeni.username).includes(tag) && !uye.roles.cache.has(tagrol)) {
    try {
     await uye.roles.add(tagrol);
      await uye.send(`Selam **${yeni}**, Sunucumuzda **<a:Pavyontagg:793071299768614922>** Tagımızı Aldığın İçin Özel Ekip Rolünü Sana Verdim!.`  );
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`${yeni} adlı üye <a:topatag:793073840506404864> tagımızı alarak aramıza katıldı!`));
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(tag) && uye.roles.cache.has(tagrol)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(tagrol).position));
      await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${tag}**`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`));
    } catch(err) { console.error(err) };
  };
});

//----------------------TAG-KONTROL----------------------\\     

client.on("guildMemberAdd", member => {
  let sunucuid = "756106557263183894"; //Buraya sunucunuzun IDsini yazın
  let tag = "ꁚ"; //Buraya tagınızı yazın
  let rol = "764893483739643914"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
      .setTimestamp()
  client.channels.cache.get('764893483739643914').send(tagalma)
}
})

//-----------------------TAG-KONTROL----------------------\\     


//-----------------------TAG-----------------------\\     

client.on("message", message => {
    if(message.content.toLowerCase() == "tag") 
    return message.channel.send(`ꁚ`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "-tag") 
    return message.channel.send(`ꁚ`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "_tag") 
    return message.channel.send(`ꁚ`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "a!tag") 
    return message.channel.send(`ꁚ`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "a.tag") 
    return message.channel.send(`ꁚ`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".tag") 
    return message.channel.send(`ꁚ`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "napim") 
    return message.channel.send(`Götüne sok`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "-.()") 
    return message.channel.send(`<a:Berat:787758359193321473>`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "-.)(") 
    return message.channel.send(`<a:SapkBerat:787760617569648640>`)
});  

 client.on("message", message => {
    if(message.content.toLowerCase() == "-.)l(") 
    return message.channel.send(`<a:flagbt:788689004949274624>`)
});  

client.on("message", message => {
    if(message.content.toLowerCase() == "-.)rn(") 
    return message.channel.send(`<a:RGBNAH:794306341921488930>`)
});  

client.on("message", message => {
    if(message.content.toLowerCase() == "-.)k(")
    return message.channel.send(`  <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219> <a:kopoc:788804833360478219>  `)
}); 

client.on("message", message => {
    if(message.content.toLowerCase() == "napiim") 
    return message.channel.send(`götüne sok`)
});


//-----------------------TAG-----------------------\\    


//-----------------------AFK-----------------------\\    
client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Şuanda Afk \nSebep : ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız.`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});
//-----------------------AFK-----------------------\\  



//////////////////////////////////yasaklı tag ban//////////////////////////////////////////////////////
client.on('guildMemberAdd', async member => {

  if(member.user.username.includes("メ")) {  
   member.user.send('İsminde Yasaklı Tag Bulundurduğun İçin Sunucudan Yasaklandın İtiraz Veya Tagı Çıkardığın Zaman İletişime Geçebilirsin.') 
    member.ban({
      reason: `Sunucumuzun Yasaklı Tagını Bulundurduğu İçin Yasaklandı`,  })
  }
})
///////////////////////////////////////




// QUİCK.DB GEREKTİRMEYEN VERSİYONU
// İltifatlar
const iltifatlar = [
  'Etrafımda olduğunda başka bir şeye ihtiyacım olmuyor.',
  'Güneşe gerek yok, gözlerindeki sıcaklık içimi ısıtıyor.',
  'Baharı anımsatan kokunu içime çektiğimde, her şey mümkün görünüyor.',
  'Baharda açan çiçeklerinden bile daha güzelsin. Eğer bir şair olsaydım, güzelliğine adanacak yüzlerce şiir yazabilirdim.',
  'Kusursuz tavırların var. Korkunç kararlar verdiğimde beni yargılamadığın için sana minnettarım.',
  'Karayollarında değil, senin kollarında öleyim…',
  '31 Aralıkta Kinder sürpriz aldım içinden dansöz çıktı. Herkese mutlu yıllar…',
  'Mutluluk ne diye sorsalar, cevabı gülüşünde ve o sıcak bakışında arardım.',
  'Bu kadar güzel bakma, başka biri daha sana aşık olur diye ödüm kopuyor.',
  'Güzel yüzünü göremediğim için geceleri hiç sevmiyorum.',
  'o kadar çok meslek türü varken neden şerefsizlik tatlım?',
  'aklın başına gelir ama ben sana gelmem',
  'Çok tatlı olmayı bırak artık... Kalbim başa çıkamıyor !',
  "Yaşanılacak en güzel mevsim sensin.",
  "Sıradanlaşmış her şeyi, ne çok güzelleştiriyorsun.",
  "Gönlüm bir şehir ise o şehrin tüm sokakları sana çıkar.",
  "Birilerinin benim için ettiğinin en büyük kanıtı seninle karşılaşmam.",
  "Denize kıyısı olan şehrin huzuru birikmiş yüzüne.",
  "Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.",
  "Gece yatağa yattığımda aklımda kalan tek gerçek şey sen oluyorsun.",
  "Ne tatlısın sen öyle. Akşam gel de iki bira içelim.",
  "Bir gamzen var sanki cennette bir çukur.",
  "Gecemi aydınlatan yıldızımsın.",
  "Ponçik burnundan ısırırım seni",
  "Bu dünyanın 8. harikası olma ihtimalin?",
  "fıstık naber?",
  "Dilek tutman için yıldızların kayması mı gerekiyor illa ki? Gönlüm gönlüne kaydı yetmez mi?",
  "Süt içiyorum yarım yağlı, mutluluğum sana bağlı.",
  "Müsaitsen aklım bu gece sende kalacak.",
  "Gemim olsa ne yazar liman sen olmadıktan sonra...",
  "Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.",
  "Sabahları görmek istediğim ilk şey sensin.",
  "Mutluluk ne diye sorsalar- cevabı gülüşünde ve o sıcak bakışında arardım.",
  "Hayatım ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.",
  "Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.",
  "Sesini duymaktan- hikayelerini dinlemekten asla bıkmayacağım. Konuşmaktan en çok zevk aldığım kişi sensin.",
  "Üzerinde pijama olsa bile, nasıl oluyor da her zaman bu kadar güzel görünüyorsun? Merhaba, neden bu kadar güzel olduğunu bilmek istiyorum.",
  "Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.",
  "Çocukluk yapsan da gönlüme senin için salıncak mı kursam?",
  "Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.",
  "Hangi çiçek anlatır güzelliğini? Hangi mevsime sığar senin adın. Hiçbir şey yeterli değil senin güzelliğine erişmeye. Sen eşsizsin...",
  "Rotanızı geçen her geminin ışığıyla değil, yıldızlara göre ayarlayın.",
  "Telaşımı hoş gör, ıslandığım ilk yağmursun.",
  "Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi..."
  
];
// İLTİFATLARI BU ŞEKİLDE İSTEDİĞİNİZ KADAR ÇOĞALTABİLİRSİNİZ
var iltifatSayi = 0; // Buraya ellemeyin!
client.on("message", async message => {
  if(message.channel.id !== "764893647618965514" || message.author.bot) return;
  iltifatSayi++
  if(iltifatSayi >= 100) { // 50 yazan yer, 50 mesajda bir iltifat edeceğini gösterir, değiştirebilirsiniz.
    iltifatSayi = 0;
    const random = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`**${(iltifatlar)[random]}**`);
  };
});




client.on("ready", async function() {
const voiceChannel = "797225778097029190"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})



