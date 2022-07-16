import { readFileSync } from 'fs';
import { detailedRaceView } from '../view/f1-race-view.js';
import { RACE_DURRATION_MS } from '../f1-race-constants.js'


export function nextRace() {
    let now = new Date();
    const races = JSON.parse(readFileSync('./src/model/f1-schedule.json', 'utf8'));
    const nextRace = getNextRace(races, now)

    return detailedRaceView(nextRace, now);
};

function getNextRace(races, now) {
    for (const [_, race] of Object.entries(races)) {
        const raceTime = new Date(race.raceTime);
        const timeToRaceStart = raceTime.getTime() - now.getTime();

        if (timeToRaceStart > 0 || -timeToRaceStart < RACE_DURRATION_MS) {
            return race;
        }

    }
    return null;
}
