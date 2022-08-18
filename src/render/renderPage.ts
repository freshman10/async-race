import { createElement } from '../businessLogic/utils';
import { CONTAINER, GARAGE_BUTTON_LABEL, WINNERS_BUTTON_LABEL } from '../constants/constants';
import { CarsResponse, WinnersResponse } from '../constants/types';
import { renderGarage } from './renderGarage';
import renderWinners from './renderWinners';

function renderTabs(): void {
    const containerTabs = createElement({
        type: 'div',
        parentElement: document.body,
        classes: [CONTAINER, 'upper-layer'],
    });
    createElement({
        type: 'button',
        parentElement: containerTabs,
        classes: ['button', 'garage-button', 'inactive'],
        text: GARAGE_BUTTON_LABEL,
    });
    createElement({
        type: 'button',
        parentElement: containerTabs,
        classes: ['button', 'winners-button'],
        text: WINNERS_BUTTON_LABEL,
    });
}

function renderSplitLayer(): void {
    createElement({ type: 'div', parentElement: document.body, classes: ['split-layer'] });
}

export async function renderPage(cars: Promise<CarsResponse>, winners: WinnersResponse): Promise<void> {
    renderTabs();
    await renderGarage(cars);
    await renderWinners(winners);
    renderSplitLayer();
}

export default renderPage;
