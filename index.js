import { readFileSync } from 'fs';
import { Client, Intents } from 'discord.js';

import { nextRace } from './src/controller/f1-race-controller.js';
import { driversStandings } from './src/controller/f1-driver-standings-controller.js';
import { constructorsStandings } from './src/controller/f1-constructor-standings-controller.js';

constructorsStandings

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!!';

client.once('ready', () => {console.log('legoyaRacing bot started!');});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'f1-next':
            message.channel.send(nextRace());
        break;
        case 'f1-wdc':
            message.channel.send(driversStandings());
        break;
        case 'f1-wcc':
            message.channel.send(constructorsStandings());
        break;
        case 'help':
            message.channel.send(
                `atm i only support the commands: "f1" and "ping". Use ${prefix} as a prefix to the command.`
                );
        break;
        case 'ping':
            message.channel.send('... yes, i am here.');
        break;
        default:
            message.channel.send('un-supported command');
    }
});

client.login(readFileSync('./token.txt', 'utf8'));
