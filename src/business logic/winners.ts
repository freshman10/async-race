import { getWinners } from '../API/api';
import { state } from '../state/state';
import { WinnersResponse } from '../constants/types';
import renderWinners from '../render/renderWinners';
import { controlsWinners } from './controls';
import { eraseElement } from './garage';
import { clearDOMStorage, elementDomStorage } from './utils';

export async function updateWinnersTable(winners: WinnersResponse): Promise<void> {
    eraseElement('winners');
    clearDOMStorage('winners');
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
    if (textContent === 'Wins') {
        return 'wins';
    }
    if (textContent.split(' ')[1] === 'time') {
        return 'time';
    }
    return 'id';
}

function getOrder(target: HTMLElement): string {
    if (target.classList.contains('descending')) {
        return 'DESC';
    }
    return 'ASC';
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

export default updateWinnersTable;
