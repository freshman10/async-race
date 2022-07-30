import { CONTAINER, GARAGE_BUTTON_LABEL, WINNERS_BUTTON_LABEL } from '../constants/constants';
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

export function renderPage(): void {
    renderTabs();
    renderGarage();
    renderWinners();
    renderSplitLayer();
}

export default renderPage;
