module.exports = async (client, message) => {
  const args = message.content.slice("?find".length).trim().split(/ +/);
  const userId = args.shift();
  
  if (!userId) {
      message.reply("Veuillez spécifier l'ID de l'utilisateur.");
      return;
  }
  
  const guildId = message.guild.id;
  let guild = client.guilds.cache.get(guildId);

  let member = guild.members.cache.get(userId);
  if (member) {
      if (member.voice.channel) {
          const channelId = member.voice.channel.id;
          await message.reply(`L'utilisateur avec l'ID ${userId} est dans le salon vocal : <#${channelId}>`);
      } else {
          await message.reply(`L'utilisateur avec l'ID ${userId} n'est pas dans un channel.`);
      }
  } else {
      await message.reply(`L'utilisateur avec l'ID ${userId} n'est pas trouvé dans ce serveur.`);
  }
}
