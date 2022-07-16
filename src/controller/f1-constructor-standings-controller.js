import { readFileSync } from 'fs';
import { constructorView } from '../view/f1-constructor-view.js';

export function constructorsStandings() {
    const constructors = JSON.parse(readFileSync('./src/model/f1-wcc-standings.json', 'utf8'));

    let message = "";
    for (const [rank, constructor] of Object.entries(constructors)) {
        message += constructorView(rank, constructor) + "\n";
    };

    return message.trim();
}
