import { LAYERS } from '../constants/constants';
import { sortingTypesEnum } from '../constants/types';

export const state = {
    activeLayer: LAYERS[0],
    pageGarage: 1,
    pageWinners: 1,
    sort: 'wins',
    order: sortingTypesEnum.DESC,
    maxPagesGarage: 1,
    maxPagesWinners: 1,
    isRace: false,
    carStatus: new Map(),
    carCurrentX: new Map(),
    carDriveStatus: new Map(),
};

export default state;
