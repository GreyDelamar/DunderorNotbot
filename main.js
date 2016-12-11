require('dotenv').config();
var dunderornot = require('./champ-picker');
const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log('Getting ready to DUNDER!');
});

client.on('message', message => {
  if (message.content == 'DO WE DUNDER?') {
    message.reply(dunderornot());
  }else if (message.content == 'do we dunder?') {
    message.reply(dunderornot());
  }else if (message.content == 'DOWEDUNDER?') {
    message.reply(dunderornot());
  }else if (message.content == 'dowedunder?') {
    message.reply(dunderornot());
  }
});
