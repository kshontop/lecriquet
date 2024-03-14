module.exports = async (client, message) => {
    const Channel = message.channel;
    const Messages = await Channel.messages.fetch({
        limit: 100
    })
    Messages.forEach(msg => {
        if (!msg.system && msg.author.id === client.user.id) {
            msg.delete().then((msg) => console.log("Message Deleted |" + msg.content)).catch(() => {})
        }
    })
}