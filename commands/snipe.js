const axios = require('axios');
const config = require('../src/config');

async function snipeNitro(client) {
    client.on('messageCreate', async (message) => {
        if (!message.author.bot) {
            if (message.content.includes('https://discord.gift/') || message.content.includes('discord.gift/') || message.content.includes('discordapp.com/gifts/') || message.content.includes('discord.com/gifts/') || message.content.includes('discord.gifts.uk/') || message.content.includes('discord.gg/')) {
                const content = `[${message.guild.name}] ${message.author.tag}: ${message.content}`;
                console.log(content);
                const nitroLink = message.content.match(/(https?:\/\/[^\s]+)/g)[0];
                try {
                    await client.redeemNitro(nitroLink, message.channel, null);
                    console.log(`Le code Nitro a été réclamé avec succès pour le lien : ${nitroLink}`);
                } catch (error) {
                    console.error(`Erreur lors de la tentative de réclamation du code Nitro pour le lien ${nitroLink}: ${error}`);
                }
            }
        }
    });
}

module.exports = snipeNitro;
