import { readFileSync } from 'fs';
import { driverView } from '../view/f1-driver-view.js';

export function driversStandings() {
    const drivers = JSON.parse(readFileSync('./src/model/f1-wdc-standings.json', 'utf8'));
    
    let message = "";
    for (const [rank, driver] of Object.entries(drivers)) {
        message += driverView(rank, driver) + "\n";
    };

    return message.trim();
}
