curl -o ./src/model/f1-schedule.json --location --request GET 'https://ergast.com/api/f1/current.json'
curl -o ./src/model/f1-wdc-standing.json --location --request GET 'https://ergast.com/api/f1/current/driverStandings.json'
curl -o ./src/model/f1-wcc-standing.json --location --request GET 'https://ergast.com/api/f1/current/constructorStandings.json'
