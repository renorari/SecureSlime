const Discord = require('discord.js');
const { readFileSync } = require("fs");

require("./command.js")
require("./command/emoji.js")

const client = new Discord.Client();
const TOKEN = readFileSync('./botToken.txt', 'utf8');

client.login(TOKEN);