const { getVoiceConnection,  } = require("@discordjs/voice");

module.exports = async (client, message) => {
    const connection = getVoiceConnection(message.guild.id);
    if(connection) {
        connection.disconnect();
        message.reply('✅ Vous avez quitter le salon vocal');
    } else {
        message.reply('✖️ Vous êtes dans aucun salon vocal');
    }
}
