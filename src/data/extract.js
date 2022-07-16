import { readFileSync, writeFileSync } from 'fs';


extractRaceSchedule(JSON.parse(readFileSync('./src/data/f1-schedule.json', 'utf8')));
extractDriverStandings(JSON.parse(readFileSync('./src/data/f1-wdc-standings.json', 'utf8')));
extractWCCStandings(JSON.parse(readFileSync('./src/data/f1-wcc-standings.json', 'utf8')));


function extractRaceSchedule(scheduleData) {
    const races = {}
    scheduleData.MRData.RaceTable.Races.forEach(race => {
        races[race.round] = {
            grandPrix: race.raceName + ' @ ' + race.Circuit.circuitName,
            raceTime: race.date + 'T' + race.time,
            sprintTime: race.hasOwnProperty('Sprint') ? race.Sprint.date + 'T' + race.Sprint.time : null,
            qualificationTime: race.Qualifying.date + 'T' + race.Qualifying.time,
        };
    });

    writeFileSync('./src/model/f1-schedule.json', JSON.stringify(races) , 'utf-8');
};

function extractDriverStandings(standingsData) {
    const drivers = {}
    standingsData.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach(driver => {
        drivers[driver.position] = {
            points: driver.points,
            wins: driver.wins,
            name: driver.Driver.givenName + ' ' + driver.Driver.familyName,
            team: driver.Constructors[0].name,
        };
    });

    writeFileSync('./src/model/f1-wdc-standings.json', JSON.stringify(drivers) , 'utf-8');
};

function extractWCCStandings(standingsData) {
    const constructors = {}
    standingsData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.forEach(constructor => {
        constructors[constructor.position] = {
            wins: constructor.wins,
            points: constructor.points,
            name: constructor.Constructor.name,        
        };
    });
    
    writeFileSync('./src/model/f1-wcc-standings.json', JSON.stringify(constructors) , 'utf-8');
};
