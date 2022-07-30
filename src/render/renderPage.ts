import { CONTAINER, GARAGE_BUTTON_LABEL, WINNERS_BUTTON_LABEL } from '../constants/constants';
import { CarsResponse } from '../constants/types';
import { createElement } from './createHTMLelement';
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

export function renderPage(cars: Promise<CarsResponse>): void {
    renderTabs();
    renderGarage(cars);
    renderWinners();
    renderSplitLayer();
}

export default renderPage;
