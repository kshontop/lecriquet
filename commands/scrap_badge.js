const fs = require('fs');
const path = require('path');

module.exports = async (client, message) => {
    const guild = message.guild;
    const members = await guild.members.fetch();

    const badges = [
        { name: 'STAFF', description: 'STAFF', flag: 1 << 0 },
        { name: 'PARTNER', description: 'Propriétaire de serveur partenaire', flag: 1 << 1 },
        { name: 'HYPESQUAD', description: 'Événements HypeSquad', flag: 1 << 2 },
        { name: 'BUG_HUNTER_LEVEL_1', description: 'Détection de bug niveau 1 sur Discord', flag: 1 << 3 },
        { name: 'PREMIUM_EARLY_SUPPORTER', description: 'Early', flag: 1 << 9 },
        { name: 'TEAM_PSEUDO_USER', description: 'Utilisateur d\'équipe', flag: 1 << 10 },
        { name: 'BUG_HUNTER_LEVEL_2', description: 'Détection de bug niveau 2 sur Discord', flag: 1 << 14 },
        { name: 'VERIFIED_DEVELOPER', description: 'Développeur de bot vérifié', flag: 1 << 17 },
        { name: 'CERTIFIED_MODERATOR', description: 'CERTIFIED_MODERATOR', flag: 1 << 18 },
        { name: 'COLLABORATOR', description: 'Collaborateur', flag: 1 << 50 },
        { name: 'RESTRICTED_COLLABORATOR', description: 'Collaborateur considéré comme personnel', flag: 1 << 51 },
    ];
    
    badges.forEach(badge => {
        const badgeMembers = members.filter(member => (member.user.flags & badge.flag) !== 0);
        const badgeUsernames = badgeMembers.map(member => member.user.username);
        const badgeData = {
            serverName: guild.name,
            badgeName: badge.name,
            usernames: badgeUsernames
        };
        const jsonData = JSON.stringify(badgeData, null, 2);
        const serverFolder = path.join(__dirname, guild.name);
        if (!fs.existsSync(serverFolder)) {
            fs.mkdirSync(serverFolder);
        }
        const fileName = path.join(serverFolder, `${badge.name.toLowerCase()}.json`);
        fs.writeFile(fileName, jsonData, (err) => {
            if (err) {
                console.error(`Erreur lors de l'écriture du fichier JSON pour le badge ${badge.name} :`, err);
                return;
            }
            console.log(`Les noms d'utilisateur des membres possédant le badge ${badge.name} ont été enregistrés dans ${fileName}.`);
        });
    });
};
