import { readFileSync } from 'fs';
import { Client, Intents } from 'discord.js';

import { MESSAGE_PREFIX } from './config.js'
import { routeCommand } from './src/router.js'

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {console.log('legoyaRacing bot started!');});

client.on('messageCreate', message => {
    if (!message.content.startsWith(MESSAGE_PREFIX) || message.author.bot) return;

    const args = message.content.slice(MESSAGE_PREFIX.length).split(" ");
    const command = args.shift().toLowerCase();

    message.channel.send(routeCommand(command));
});

client.login(readFileSync('./token.txt', 'utf8'));
