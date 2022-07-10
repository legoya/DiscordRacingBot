const RACE_DURRATION = 7_200_000;
let seasonRound = 0;

export function nextRace(races) {
    const now = new Date()
    for (let i = seasonRound; i < races.length; i ++) {
        const raceTime = new Date(races[i].date + 'T' + races[i].time);

        const timeDiff = now.getTime() - raceTime.getTime();
        if (0 < timeDiff && timeDiff < RACE_DURRATION) {
            seasonRound = i;
            return [races[i].raceName, -1];
        }
        if (timeDiff < 0) {
            seasonRound = i;
            return [races[i].raceName, -timeDiff];
        }
    }
    return [null, null];
};