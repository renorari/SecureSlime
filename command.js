const Discord = require('discord.js');
const { readFileSync } = require("fs");
const config = require("./config.json");

const client = new Discord.Client();
const TOKEN = readFileSync('./botToken.txt', 'utf8');
const prefix = config.prefix;

client.on('ready', () => {
    console.log('Run command.js');
});

client.on('message', async message => {
    if (!message.guild.id == "914595171881078784") return;
    if (!message.content.startsWith(prefix)) return;
    const [cmd, ...args] = message.content.slice(prefix.length).split(" ");
    if (cmd == 'hello') {
        var roleId = "914596371351359548";
        var welcomeCh = message.guild.channels.cache.get("914597072773206046");
        var fromArray = ["空から降ってきました。", "迷い込んだようだ。", "拾われたようだ。", "参加しました。", "転がってきました。", "漂着しました", "観光に来ました。", "転生してきたようだ"];
        var from = fromArray[Math.floor(Math.random() * fromArray.length)];
        message.member.roles.add(`${roleId}`);
        message.reply({
            embed: {
                description: `<@&${roleId}>を付与しました👍`,
                color: "RANDOM"
            }
        });
        welcomeCh.send(`@here <@${message.author.id}>さんが${from}`);
    } else {
        message.reply("すみません。\nそのコマンドは存在しないようです😭");
    }
})

client.login(TOKEN);