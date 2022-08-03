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

export const base = 'http://127.0.0.1:3000';
export const garage = `${base}/garage`;
export const engine = `${base}/engine`;
export const winners = `${base}/winners`;

export const STRING = 'string';
export const WRONG_DATA = 'You gave me a wrong data !';
export const CONTAINER = 'container';
export const CRUD_CONTAINER_CLASS = 'container-crud';
export const GARAGE_BUTTON_LABEL = 'TO GARAGE';
export const WINNERS_BUTTON_LABEL = 'TO WINNERS';

export const CAR_MODELS = {
    Moscvich: ['400', '402', '408', '415', '2150', '2142'],
    BMW: ['2', '3', '4', '5', '6', '7'],
    Lexus: ['RX', 'ES', 'NX', 'GX', 'LX', 'LS'],
    Ferrari: ['296 GTB', 'Roma', 'F8 Tributo', '812 Superfast', 'SF90 Stradale'],
    LADA: ['Granta', 'Vesta', 'XRAY', 'Largus', '4x4', 'Niva'],
    Nissan: ['Pathfinder', 'X-Trail', 'Qashqai', 'Terrano', 'Murano', 'Juke'],
    Toyota: ['Corolla', 'Camry', 'C-HR', 'RAV4', 'Highlander', 'Fortuner'],
};
