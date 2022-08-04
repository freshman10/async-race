export const state = {
    activeLayer: 'garage',
    page: 1,
    pageWinners: 1,
    sort: 'wins',
    order: 'DESC',
    maxPagesGarage: 1,
    maxPagesWinners: 1,
    isRace: false,
    carStatus: new Map(),
    carCurrentX: new Map(),
    carDriveStatus: new Map(),
};

export default state;
