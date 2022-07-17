export function driverView(rank, driver) {
    let driverStr = `${rank} | ${driver.name} - ${driver.points} | ${driver.team}`;
    driverStr += +driver.wins ? ` (${driver.wins} wins)` : '';

    return driverStr;
}
