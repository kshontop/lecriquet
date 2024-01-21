const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const config = require('../lealove/src/config');

const ping = require('./command/ping');
const sendmessage = require('./command/sendmessage');

client.on('messageCreate', async (msg) => {
    if (msg.content.startsWith(config.prefix)) {
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === "ping") {
            await ping(client, msg);
        } else if (command === "sendmessage") {
            await sendmessage(client, msg);
        } else {
            msg.reply('❌ Commande introuvable');
        }
    }
});

client.on('ready', async () => {
    console.log(`${client.user.tag} est prêt !`);

    // Définir l'heure cible (15 février 2024 à 00:00:00 UTC)
    const targetDate = new Date('2024-02-15T00:00:00Z').getTime();

    // Fonction pour calculer le temps restant et envoyer un message toutes les 5 secondes
    function calculateTimeRemaining() {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        if (timeDifference <= 0) {
            // La date cible est atteinte, vous pouvez arrêter le processus ici si nécessaire
            clearInterval(intervalId);
            console.log('Date cible atteinte. Arrêt du processus.');
        } else {
            const remainingTime = new Date(timeDifference);

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = remainingTime.getUTCHours();
            const minutes = remainingTime.getUTCMinutes();
            const seconds = remainingTime.getUTCSeconds();

            const timeMessage = `je t'aime plus que tout ❤️ \n\n Il reste ${days} jours avant qu'on se revois`;

            // Envoyer le message toutes les 5 secondes
            client.users.cache.get('615986973827661844').send(timeMessage);
        }
    }

    // Démarrez le processus toutes les 5 secondes
    const intervalId = setInterval(calculateTimeRemaining, 1000);
});

client.login(config.token);
