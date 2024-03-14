const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const config = require('../lealove/src/config');

const ping = require('./command/ping');
const gay = require('./command/gay');
const copy = require('./command/copy');
const sendmessage = require('./command/sendmessage');
const hypesquad = require('./command/hypesquad');
const stats = require('./command/stats');

client.on('messageCreate', async (msg) => {
    if (msg.content.startsWith(config.prefix)) {
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === "ping") {
            await ping(client, msg);$
        } 
        else if (command === "hypesquad") {
            await hypesquad(client, msg);
        }
        else if (command === "stats") {
            await stats(client, msg);
        }
        else {
            msg.reply('❌ Commande introuvable');
        }
    }
});

client.on('ready', async () => {
    console.log(`${client.user.tag} est prêt !`);
})
client.login(config.token);
