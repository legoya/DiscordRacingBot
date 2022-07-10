curl -o ./src/model/raw/f1-schedule.json --location --request GET 'https://ergast.com/api/f1/current.json'
curl -o ./src/model/raw/f1-wdc-standings.json --location --request GET 'https://ergast.com/api/f1/current/driverStandings.json'
curl -o ./src/model/raw/f1-wcc-standings.json --location --request GET 'https://ergast.com/api/f1/current/constructorStandings.json'
node ./src/data-processor/extract.js
