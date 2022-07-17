# RacingBot
Discord bot to provide up to date Formula 1 information in chat channels.

## Current Features
The bot current responds to commands:
`f1-next`: provide count down to next Grand Prix weekend events including race, qualifying and sprint race (if applicable).
`f1-wdc`: lists the drivers' championship standings, ranked first to last.
`f1-wcc`: lists the constructors' championship standings, ranked first to last.

## Acknowledgements
This programm makes use of ergast.com as the **[`API for collecting F1 data`] (https://ergast.com/mrd/)**.

## Using or Interacting with the Bot
To re-use this bot code as a template, you will need to **[`set up a discord application and bot`] (https://discordpy.readthedocs.io/en/stable/discord.html)**. During the creation process, a token will be generated; paste this token in to a file called `token.txt` in the root directory of this project.

**To start the bot, run start-up.sh.**

A file update.sh is also provided and is designed to be run periodically to continously refresh the data and model so the bot is able to provide up-to-date information.

## Configuration
The file `config.js` includes various paramaters including the prefix the bot will listen for on the discord server. 

## Potential Future Features
1. Add support series information (e.g. f2) to the data to list support race times.
2. Create query to return the last race, see result and potentially link to highlights posted by Formula 1 to YouTube.
3. Create query to list all races, with links to external information.
4. Create query to find specific race, future or past.
