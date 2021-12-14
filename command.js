module.exports = (client) => {
    client.on('message', async message => {
        if (!message.guild.id == "914595171881078784") return;
        if (!message.content.startsWith(prefix)) return;
        const [cmd, ...args] = message.content.slice(prefix.length).split(" ");
        if (cmd == 'hello') {
            if (!message.channel.id == "914596250794471434") return;
            var roleId = "914596371351359548";
            var welcomeCh = message.guild.channels.cache.get("914597072773206046");
            var fromArray = ["空から降ってきました。", "迷い込んだようだ。", "拾われたようだ。", "参加しました。", "転がってきました。", "漂着しました。", "観光に来ました。", "転生してきたようだ。", "遊びに来たようだ。", "出現した。", "飛び込んできました。"];
            var from = fromArray[Math.floor(Math.random() * fromArray.length)];
            message.member.roles.add(`${roleId}`);
            message.reply({
                embed: {
                    description: `<@&${roleId}>を付与しました👍`,
                    color: "RANDOM"
                }
            });
            console.log(`${message.author.username}がサーバーに参加しました`);
            welcomeCh.send(`@here <@${message.author.id}>さんが${from}`);
        } else if (cmd == "run") {
            var id = "830789490481954856";
            if (!message.author.id == id) return;
            try {
                var args2 = args;
                const code = args2.join(" ");
                let evaled = eval(code);


                if (!typeof evaled == "string") evaled = require("util").inspect(evaled);
                console.log(evaled, { code: "xl" });
            } catch (err) {
                console.log(err)
                client.users.cache.get(id).send(err)
            }
        } else {
            message.reply("すみません。\nそのコマンドは存在しないようです😭");
        }
    });
};