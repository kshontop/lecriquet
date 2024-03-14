module.exports = async (client, message) => {
    const muter = message.mentions.users.first();
    
    if (muter === undefined) {
        message.reply("Vous n'avez pas mentionné de membre.")
        return;
    } 

    const percentage = Math.floor(Math.random() * 100 + 1);
    message.reply(`${muter} est gay à ${percentage}% 🏳️‍🌈`)

}