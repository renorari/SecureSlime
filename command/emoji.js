const Discord = require("discord.js");
const { readFileSync, writeFileSync, mkdirSync } = require("fs");

module.exports = (client) => {
    client.on("message", async (message) => {
        if (!message.guild.id == "914595171881078784") return;
        if (message.content.match(/:[A-Z]|:[a-z]|:[0-9]/g)) {
            try {
                var webhook = JSON.parse(readFileSync(`globalchatfiles/${message.guild.id}/${message.channel.id}/webhook.json`));
                var sentchannelid = webhook.channel;
                if (message.channel.id == sentchannelid) return;
            } catch (error) {
                return;
            }
            if (message.author.bot) return;
            if (message.channel.type == "dm") return;
            message.channel.createWebhook("emojiWebhook").then(webhook => {
                var webhookinfo = {
                    "id": webhook.id,
                    "token": webhook.token,
                    "channel": message.channel.id
                }
                var savedata = JSON.stringify(webhookinfo);
                try {
                    mkdirSync(`globalchatfiles/${message.guild.id}/${message.channel.id}/`, { recursive: true });
                    writeFileSync(`globalchatfiles/${message.guild.id}/${message.channel.id}/webhook.json`, savedata);
                }
                catch (error) {
                    var msg = `Webhookの作成に失敗しました\n\n実行チャンネル: ${message.channel.name}\n実行チャンネルID: ${message.channel.id}`;
                    message.channel.send(msg);
                    console.log(msg);
                    return;
                }
                var sentchannelid = webhook.channel
                const webhooks = new Discord.WebhookClient(webhook.id, webhook.token)
                var msg = `Webhookの作成に成功しました\n\n実行チャンネル: ${message.channel.name}\n実行チャンネルID: ${message.channel.id}`;
                webhooks.send(msg);
                console.log(msg);
            }).catch(console.error);
        }
    });
    client.on("message", async message => {
        if (!message.guild.id == "914595171881078784") return;
        if (message.author.bot) {
            return;
        }
        if (message.channel.type == "dm") {
            return;
        }
        if (message.content.match(/:[A-Z]|:[a-z]|:[0-9]/g)) {
            console.log(message.content);
            var webhook;
            try {
                webhook = JSON.parse(readFileSync(`globalchatfiles/${message.guild.id}/${message.channel.id}/webhook.json`));
                var sentchannelid = webhook.channel;
            } catch (error) {
                return;
            }
            if (message.channel.id == sentchannelid) {
                var channelid = webhook.channel;
                try {
                    client.channels.cache.get(channelid).id;
                }
                catch (error) {
                    return;
                }
                var webhookid = webhook.id
                var webhooktoken = webhook.token
                const serverwebhook = new Discord.WebhookClient(webhookid, webhooktoken)
                try {
                    message.delete();
                    serverwebhook.send(message.content, { username: message.author.tag, avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`, disableMentions: "all" })
                } catch (error) {
                }
            }
        }//guild
    });
};