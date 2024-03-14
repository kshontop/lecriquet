const config = require('../src/config');

module.exports = async (client, message) => {
    if (!message.content.startsWith(config.prefix + 'hypesquad')) return;

    const args = message.content.slice(config.prefix.length + 'hypesquad'.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (['0', '1', '2', '3'].includes(command)) {
        const hypesquadValue = parseInt(command);
        
        switch (hypesquadValue) {
            case 0:
                client.user.setHypeSquad(0);
                message.reply('✅ Vous avez quitté HyperSquad');
                break;
            case 1:
                client.user.setHypeSquad(1);
                message.reply('✅ Vous avez rejoint HOUSE_BRAVERY');
                break;
            case 2:
                client.user.setHypeSquad(2);
                message.reply('✅ Vous avez rejoint HOUSE_BRILLIANCE');
                break;
            case 3:
                client.user.setHypeSquad(3);
                message.reply('✅ Vous avez rejoint HOUSE_BALANCE');
                break;
            default:
                message.reply('➡️ Choisissez 0, 1, 2 ou 3 pour sélectionner une option.');
        }
    } else {
        message.reply('✖️ Option invalide');
    }
};
