import { helpMessageFromRoutes } from './helpers/help-message-builder.js';

import { nextRace } from './controller/f1-race-controller.js';
import { driversStandings } from './controller/f1-driver-standings-controller.js';
import { constructorsStandings } from './controller/f1-constructor-standings-controller.js';


export function routeCommand(command) {
    if (command === "help") {
        return FULL_HELP_MESSAGE;
    }

    if (!(command in ROUTES)) {
        return "Command not found.\n" + FULL_HELP_MESSAGE;
    }

    return ROUTES[command].function();
}

const ROUTES = {
    "f1-next": {
        "function": nextRace,
        "description": "Get the time until each event in the next F1 weekend",
    },
    "f1-wdc": {
        "function": driversStandings,
        "description": "Get the current drivers' championship standings in F1.",
    },
    "f1-wcc": {
        "function": constructorsStandings,
        "description": "Get the current constructors' championship standings in F1.",
    },
    "ping": {
        "function": () => {return '... yes, i am here.'},
        "description": "Use to test if the bot is accessable.",
    }
}

const FULL_HELP_MESSAGE = helpMessageFromRoutes(ROUTES);
