export const state = {
    activeLayer: 'garage',
    page: 1,
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
