const Discord = require('discord.js');
const { readFileSync } = require("fs");

const client = new Discord.Client();
const TOKEN = readFileSync('../botToken.txt', 'utf8');

client.login(TOKEN);