const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Nzk0NTQ4MzE2MDM3NzA5ODQ0.X-8ayA.fbVoEmv4B9WeoBgoSMgbOz-gtw4');