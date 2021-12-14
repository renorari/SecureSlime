const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const { readFileSync, appendFileSync, writeFileSync, mkdirSync } = require("fs");

require("./command.js");
require("./command/emoji.js");

const client = new Discord.Client();
const TOKEN = readFileSync('./botToken.txt', 'utf8');


client.on('ready', () => {
    console.log('Run main.js');
    client.user.setActivity('Twitter', { type: 'WATCHING' });
});
client.on("message", async (message) => {
    if (!message.guild.id == "914595171881078784") return;
    var logFile;
    var logData = message.author.tag + "< " + message.content + "\n---\n実行者ID: " + message.author.id + "\nMsgID: " + message.id + "\n";
    var logPath = `chatLog/${message.guild.id}/${message.channel.id}/chat.log`;
    try {
        logFile = readFileSync(logPath);
    } catch (error) {
        var loggingData = "チャンネルネーム: " + message.channel.name + "\n";
        mkdirSync(`chatLog/${message.guild.id}/${message.channel.id}/`, { recursive: true });
        writeFileSync(logPath, loggingData);
        console.log(logData);
        appendFileSync(logPath, logData + "\n");
    }
    console.log(logData);
    appendFileSync(logPath, logData + "\n");
});

client.login(TOKEN);