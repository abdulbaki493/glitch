const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Fast Team | J4J BOT");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let oyuncularsehri = await data.get(msg.author.id)
        
        if (oyuncularsehri === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4J https://discord.gg/uRbggEYh8r") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1500)
          await msg.channel.send("Done")      
      }
      }
    }
  }
})


client.on("guildCreate", oyuncularsehri => {
  sleep(1000);
  if (
    oyuncularsehri.id === "763391661123305493" ||  // j4j sunucusunun idsi
    oyuncularsehri.id === "763391661123305493"  // j4j sunucusunun idsi
  ) {
    
  } else {
    oyuncularsehri.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("772557573547098113") // j4j sunucusunun kanal id'si


       a.send("**J4j Dm**")


      }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("772557573547098113") // j4j sunucusunun kanal id'si


       a.send("**J4j Türküm Dm**")


      }, 60000);
})

client.login(""NDg4MzQ3NDk1OTMyNDkzODM0.X65H2A.9lZv2ODJtuSd8_xadcHi31BpHiY"") // user tokeniniz
