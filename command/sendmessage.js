module.exports = async (client, message) => {
    // Déclaration et initialisation de userID
    const userID = '615986973827661844';

    // Opération asynchrone, par exemple, l'envoi d'un message à un utilisateur
    await client.users.cache.get(userID).send("je t'aime et je suis désolé d'être une grosse merde");

    // Message à retourner
    const replyMessage = `Message envoyé à ${userID}`;

    // Utilisation de la méthode .then pour indiquer que la promesse est résolue
    await message.reply(replyMessage);

    // Renvoie le message
    return replyMessage;
}
