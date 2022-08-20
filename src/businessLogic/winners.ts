import { getWinners } from '../API/api';
import { state } from '../state/state';
import { Layers, SortingColumn, sortingTypesEnum } from '../constants/types';
import renderWinners from '../render/renderWinners';
import { controlsWinners } from './controls';
import { eraseElement } from './garage';
import { clearDOMStorage, elementDomStorage } from './utils';
import { PAGINATION_WINNERS } from '../constants/constants';

export async function updateWinnersTable(): Promise<void> {
    const winners = await getWinners(state.pageWinners, state.sort, state.order);
    eraseElement(Layers.winners);
    clearDOMStorage(Layers.winners);
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

export function getSortID(textContent: string): number {
    if (!textContent) {
        return SortingColumn.id;
    }
    if (textContent.toLocaleLowerCase() === SortingColumn[1]) {
        return SortingColumn.wins;
    }
    if (textContent.split(' ')[1] === SortingColumn[2]) {
        return SortingColumn.time;
    }
    return SortingColumn.id;
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
            await updateWinnersTable();
        });
    });
}

export function addEventListenerPaginationButtonWinners(): void {
    PAGINATION_WINNERS.forEach((el) => {
        elementDomStorage.get(el)?.forEach((button) => {
            button.addEventListener('click', async () => {
                if (!button.classList.contains('inactive')) {
                    if (button.classList.contains('button-next')) {
                        state.pageWinners += 1;
                    } else {
                        state.pageWinners -= 1;
                    }
                    await updateWinnersTable();
                }
            });
        });
    });
}

export default updateWinnersTable;
