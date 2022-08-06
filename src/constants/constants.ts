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
export const NUMBER_OF_CARS_TO_GENERATE = 100;
export const TABLE_HEADER_LABELS = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
export const LAYERS = ['garage', 'winners'];
export const PAGINATION_GARAGE = ['button-garage-prev', 'button-garage-next'];
export const PAGINATION_WINNERS = ['button-winners-prev', 'button-winners-next'];
export const LETTERS_HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
export const MAX_CARS = 7;
export const MAX_WINNERS = 10;
export const START = 0;
export const SCREEN_UPDATE_FREQUENCY = 60;
export const DELAY_TIME = 5000;
export const MILLISECONDS_IN_ONE_SECOND = 1000;
export const ONE = 1;
export const LAST_INDEX = -1;
export const FINISH_OFFSET = 200;
export const COLOR_HEX_LENGTH = 6;

export const CAR_MODELS = {
    Moscvich: ['400', '402', '408', '415', '2150', '2142'],
    BMW: ['2', '3', '4', '5', '6', '7'],
    Lexus: ['RX', 'ES', 'NX', 'GX', 'LX', 'LS'],
    Ferrari: ['296 GTB', 'Roma', 'F8 Tributo', '812 Superfast', 'SF90 Stradale'],
    LADA: ['Granta', 'Vesta', 'XRAY', 'Largus', '4x4', 'Niva'],
    Nissan: ['Pathfinder', 'X-Trail', 'Qashqai', 'Terrano', 'Murano', 'Juke'],
    Toyota: ['Corolla', 'Camry', 'C-HR', 'RAV4', 'Highlander', 'Fortuner'],
};

export const sortingStates = {
    '0': 'descending',
    '1': 'ascending',
};
