import { SortingColumn, sortingTypesEnum } from '../constants/types';

export const state = {
    activeLayer: 0,
    pageGarage: 1,
    pageWinners: 1,
    sort: SortingColumn.wins,
    order: sortingTypesEnum.DESC,
    maxPagesGarage: 1,
    maxPagesWinners: 1,
    isRace: false,
    carStatus: new Map(),
    carCurrentX: new Map(),
    carDriveStatus: new Map(),
};

export default state;
