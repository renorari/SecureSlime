const Discord = require('discord.js');
const { readFileSync } = require("fs");

require("./command.js");
require("./command/emoji.js");

const client = new Discord.Client();
const TOKEN = readFileSync('./botToken.txt', 'utf8');


client.on('ready', () => {
    console.log('Run main.js');
    client.user.setActivity('Twitter', { type: 'WATCHING' });
});

client.login(TOKEN);