import { MESSAGE_PREFIX } from '../../config.js'


export function helpMessageFromRoutes(routes) {
    let message = `To interact with the bot, type a message that starts with ${MESSAGE_PREFIX} and any of the following commands:\n`;

    // for (const command of )

    for (const [key, routeObject] of Object.entries(routes)) {
        message += `${key} | ${routeObject.description}`;
        message += "\n";
    }
    return message.trim();
}