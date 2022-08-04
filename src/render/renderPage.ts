import { createElement } from '../business logic/utils';
import { CONTAINER, GARAGE_BUTTON_LABEL, WINNERS_BUTTON_LABEL } from '../constants/constants';
import { CarsResponse, WinnersResponse } from '../constants/types';
import { renderGarage } from './renderGarage';
import renderWinners from './renderWinners';

function renderTabs(): void {
    const containerTabs = createElement('div', document.body, [CONTAINER, 'upper-layer']);
    createElement('button', containerTabs, ['button', 'garage-button', 'inactive'], GARAGE_BUTTON_LABEL);
    createElement('button', containerTabs, ['button', 'winners-button'], WINNERS_BUTTON_LABEL);
}

function renderSplitLayer(): void {
    createElement('div', document.body, ['split-layer']);
}

export async function renderPage(cars: Promise<CarsResponse>, winners: WinnersResponse): Promise<void> {
    renderTabs();
    await renderGarage(cars);
    await renderWinners(winners);
    renderSplitLayer();
}

export default renderPage;
