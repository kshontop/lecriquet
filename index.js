const { Client } = require('discord.js-selfbot-v13');
const config = require('../lealove/src/config');
const { handleCommand } = require('./commandHandlers/commandHandler');
const snipeNitro = require('./commands/snipe')
const client = new Client({ checkUpdate: false });

client.on('messageCreate', async (msg) => {
    try {
        if (!msg || !msg.content.startsWith(config.prefix)) {
            return;
        }
        if (msg.author.id !== config.owner) {
            return console.log(`tente d'utiliser le selfbot mdr`);
        }
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        await handleCommand(client, command, args, msg);
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
        msg.reply('Une erreur s\'est produite lors du traitement de votre commande.');
    }
});

client.on('ready', async () => {
    console.log(`${client.user.tag} est prêt !`);
    snipeNitro(client)
});

client.login(config.token);
