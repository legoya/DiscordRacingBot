// import { nextRace } from './src/application/race-queries.js';
// import { buildNextRaceStr } from './src/utils/time-format-utils.js';
import { nextRace, driversStandings, constructorsStandings } from './src/controller/routes/f1.js'
import { Client, Intents } from 'discord.js';
import { readFileSync } from 'fs';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!!';

client.once('ready', () => {console.log('legoyaRacing bot started!');});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'f1-next':
            // const [race, timeTilRace] = nextRace(f1Data.MRData.RaceTable.Races)
            // message.channel.send(buildNextRaceStr(race, timeTilRace));
            // return nextRace();
            message.channel.send(nextRace());
        break;
        case 'f1-wdc':
            message.channel.send(driversStandings());
            // message.channel.send('Driver\'s standings coming soon!');
        break;
        case 'f1-wcc':
            message.channel.send(constructorsStandings());
            // message.channel.send('Constructor\'s standings coming soon!');
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
