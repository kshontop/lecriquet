module.exports = async (client, message) => {
    const pingMessage = await message.reply('⌛');
    const ping = pingMessage.createdTimestamp - message.createdTimestamp;
    pingMessage.edit(`⌛ ${ping} ms`);
  }
  