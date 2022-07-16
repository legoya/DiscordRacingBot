import { formatTimeFromMS, eventTimeStatus } from '../helpers/time-helpers.js';
import { SPINT_DURRATION_MS, QUAL_DURRATION_MS } from '../../config.js';


export function detailedRaceView(race, now) {
    let message = `**${race.grandPrix}**`

    const timeToRace = new Date(race.raceTime).getTime() - now.getTime();
    message += `\nRace Start: ${timeToRace < 0 ? "On Now!" : formatTimeFromMS(timeToRace)}`;

    if (race.sprintTime) {
        const timeToSprint = new Date(race.sprintTime).getTime() - now.getTime();
        message += `\nSprint Start: ${eventTimeStatus(timeToSprint, SPINT_DURRATION_MS)}`;
    }

    const timeToQual = new Date(race.qualificationTime).getTime() - now.getTime();
    message += `\nQualifying Start: ${eventTimeStatus(timeToQual, QUAL_DURRATION_MS)}`;

    return message;
}
