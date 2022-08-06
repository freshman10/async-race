import { getWinners } from '../API/api';
import { state } from '../state/state';
import { SortingColumn, sortingTypesEnum, WinnersResponse } from '../constants/types';
import renderWinners from '../render/renderWinners';
import { controlsWinners } from './controls';
import { eraseElement } from './garage';
import { clearDOMStorage, elementDomStorage } from './utils';
import { LAYERS, ONE } from '../constants/constants';

export async function updateWinnersTable(winners: WinnersResponse): Promise<void> {
    eraseElement(LAYERS[1]);
    clearDOMStorage(LAYERS[1]);
    await renderWinners(winners);
    controlsWinners();
}

function clearSortingImages(target: string, except: HTMLElement): void {
    elementDomStorage.get(target)?.forEach((el) => {
        if (el !== except) {
            el.classList.remove('ascending');
            el.classList.remove('descending');
        }
    });
}

function arrangeSemaphore(target: HTMLElement): void {
    const classes = target.classList;
    if (classes.contains('ascending')) {
        classes.remove('ascending');
        classes.add('descending');
    } else if (classes.contains('descending')) {
        classes.remove('descending');
    }
    classes.add('ascending');
}

export function getSortID(textContent: string): string {
    if (!textContent) {
        return SortingColumn[0];
    }
    if (textContent === 'Wins') {
        return SortingColumn[1];
    }
    if (textContent.split(' ')[ONE] === 'time') {
        return SortingColumn[2];
    }
    return SortingColumn[0];
}

function getOrder(target: HTMLElement): sortingTypesEnum {
    if (target.classList.contains('descending')) {
        return sortingTypesEnum.DESC;
    }
    return sortingTypesEnum.ASC;
}

export function addEventListenerSort(): void {
    elementDomStorage.get('sort')?.forEach((button) => {
        button.addEventListener('click', async (e) => {
            const target = e.target as HTMLElement;
            const textContent = target.innerText;
            clearSortingImages('sort', target);
            arrangeSemaphore(target);
            state.order = getOrder(target);
            state.sort = getSortID(textContent);
            const data = await getWinners(state.pageWinners, state.sort, state.order);
            updateWinnersTable(data);
        });
    });
}

export function addEventListenerPREVButtonWinners(): void {
    elementDomStorage.get('button-winners-prev')?.forEach((button) => {
        button.addEventListener('click', async () => {
            if (!button.classList.contains('inactive')) {
                state.pageWinners -= ONE;
                const data = await getWinners(state.pageWinners, state.sort, state.order);
                updateWinnersTable(data);
            }
        });
    });
}

export function addEventListenerNextButtonWinners(): void {
    elementDomStorage.get('button-winners-next')?.forEach((button) => {
        button.addEventListener('click', async () => {
            if (!button.classList.contains('inactive')) {
                state.pageWinners += ONE;
                const data = await getWinners(state.pageWinners, state.sort, state.order);
                updateWinnersTable(data);
            }
        });
    });
}

export default updateWinnersTable;
