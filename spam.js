const lexy = "<:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448><:hidemal:917729545170325504><:lexy:918791959752081448>";

const Discord = require('discord.js');
const { readFileSync } = require("fs");

const client = new Discord.Client();
const TOKEN = readFileSync('./botToken.txt', 'utf8');


client.on('ready', () => {
    console.log('Run main.js');
    client.user.setActivity('Twitter', { type: 'WATCHING' });
});
client.on("message", async (message) => {
    if (message.channel.id == "920217079381127179") {
        setInterval(() => {
            message.channel.send(lexy);
        }, 100)
    }
});

client.login(TOKEN);