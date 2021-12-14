const { Client, Intents } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { readFileSync, appendFileSync, writeFileSync, mkdirSync } = require("fs");
const client = new Client({ "intents": new Intents(32767) });
const TOKEN = readFileSync("./botToken.txt", "utf8");

const commands = [{
    name: 'ping',
    description: 'Replies with Pong!'
}];

const rest = new REST({ version: '9' }).setToken(TOKEN);

require("./command.js")(client);
require("./command/emoji.js")(client);

client.on("ready", async () => {
    console.log("Run main.js");
    client.user.setActivity("Twitter", { type: "WATCHING" });

    client.guilds.cache.forEach(async (guild) => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(client.user.id, guild.id),
                { body: commands },
            );
        } catch (error) {
            console.log(error);
        }
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }else{

    };
});

client.on("messageCreate", async (message) => {
    if (message.guild.id != "914595171881078784") return;
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