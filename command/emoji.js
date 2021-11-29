const Discord = require('discord.js');
const { readFileSync } = require("fs");

const client = new Discord.Client();
const TOKEN = readFileSync('../botToken.txt', 'utf8');

client.on('ready', () => {
    console.log('Run command/emoji.js');
});
//if (!message.guild.id == "914595171881078784") return;
client.login(TOKEN);