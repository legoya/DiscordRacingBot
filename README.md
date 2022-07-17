# RacingBot
Discord bot to provide up to date Formula 1 information in chat channels.

## Current Features
The bot current responds to commands:
* `f1-next`: provide count down to next Grand Prix weekend events including race, qualifying and sprint race (if applicable).
* `f1-wdc`: lists the drivers' championship standings, ranked first to last.
* `f1-wcc`: lists the constructors' championship standings, ranked first to last.

## Acknowledgements
This program makes use of ergast.com as the **[`API for collecting F1 data`](https://ergast.com/mrd/)**.

## Bot Setup and Configuration
To re-use this bot code as a template, you will need to **[`set up a discord application and bot`](https://discordpy.readthedocs.io/en/stable/discord.html)**. During the creation process, a token will be generated; paste this token in to a file called `token.txt` in the root directory of this project.

If added to the correct location, the project should resemble:

```
.
├── src
│   ├── controller          # Applies logic in incoming requests.
│   ├── data                # Collect, cache and process raw data from APIs.
│   ├── helpers             # Utilities.
│   ├── model               # Representation of data used for queries.
│   ├── view                # Formatting and display logic.
│   └── router.js           # Maps supported commands to controllers.
├── config.js               # Paramaters for defining behaviour and logic.
├── index.js                # Root of the program.
├── start-up.sh             # Script to update and start bot (use this to run the bot).
├── update.sh               # Run periodically to refresh data.
├── token.txt               # Store token provided by discord.
└── ...                     # Some other files and folders will exist as this level.
```

## Using the Bot
**To start the bot, run [`start-up.sh`](https://github.com/legoya/DiscordRacingBot/blob/main/start-up.sh)**

A file update.sh is also provided and is designed to be run periodically to continously refresh the data and model so the bot is able to provide up-to-date information.

## Configuration
The file **[`config.js`](https://github.com/legoya/DiscordRacingBot/blob/main/config.js)** includes various paramaters including the prefix the bot will listen for on the discord server. 

## Potential Future Features
1. Add support series information (e.g. f2) to the data to list support race times.
2. Create query to return the last race, see result and potentially link to highlights posted by Formula 1 to YouTube.
3. Create query to list all races, with links to external information.
4. Create query to find specific race, future or past.
