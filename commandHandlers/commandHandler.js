const hypesquad = require('../commands/hypesquad');
const scrap = require('../commands/scrap_badge');
const gay = require('../commands/gay');
const find = require('../commands/find');
const afk = require('../commands/afk');
const leave = require('../commands/leave');
const ping = require('../commands/ping');
const deleted = require('../commands/messagedelete');
const snipe = require('../commands/snipe');

async function handleCommand(client, command, args, msg) {
    switch (command) {
        case "hypesquad":
            await hypesquad(client, msg);
            break;
   
        case "scrap":
            await scrap(client, msg);
            break;
        case "snipe":
            await snipe(client, msg);
            break;   
        case "delete":
            await deleted(client, msg);
            break;     
        case "delete":
            await deleted(client, msg);
            break;
        case "ping":
            await ping(client, msg);
            break;    
        case "afk":
            await afk(client, msg);
            break;
        case "leave":
            await leave(client, msg);
            break;    
        case "track":
            await track(client, msg);
            break;
        case "gay":
            await gay(client, msg);
            break;
        case "find":
            await find(client, msg);
            break;
        default:
            msg.reply('❌ Commande introuvable');
            break;
    }
}

module.exports = { handleCommand };
