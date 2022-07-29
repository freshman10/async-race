import { CONTAINER, GARAGE_BUTTON_LABEL, WINNERS_BUTTON_LABEL } from '../constants/constants';
import { createElement } from './createHTMLelement';
import renderGarage from './renderGarage';
import renderWinners from './renderWinners';

function renderTabs(): void {
    const containerTabs = createElement('div', document.body, [CONTAINER]);
    createElement('button', containerTabs, ['button'], GARAGE_BUTTON_LABEL);
    createElement('button', containerTabs, ['button'], WINNERS_BUTTON_LABEL);
}

export function renderPage(): void {
    renderTabs();
    renderGarage();
    renderWinners();
}

export default renderPage;
