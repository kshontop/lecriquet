const config = require('../src/config')
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = async (client, message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const vocalID = args[1];
    
    if(vocalID === undefined) {
        return message.reply('➡️ Veuillez définir l\'id d\'un salon vocal dans la commande')
    }
    const guild = client.guilds.cache.get(message.guild.id);
    const voiceChannel = guild.channels.cache.get(vocalID)

    if(voiceChannel) {

        joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator,
            selfMute: true
        })
        await message.reply(`✅ Connectè avec succès au salon ${voiceChannel}`)
    } else {
        message.reply('✖️ Channel introuvable')
    }
}
