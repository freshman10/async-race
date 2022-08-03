import { getWinners } from '../API/api';
import { createElement } from '../business logic/utils';
import { state } from '../constants/constants';
import { Winner } from '../constants/types';
import { addCarSVGImage, renderItemsLabel, renderPageNumber, renderPaginationButtons } from './renderGarage';

function createTableRow(parentElement: HTMLElement, data: string[], isHeader?: boolean): void {
    const row = createElement('tr', parentElement, ['row']);
    const tag = isHeader ? 'th' : 'td';
    if (data[1]) {
        data.forEach((el) => {
            const element = createElement(tag, row, ['table-item']);
            element.innerHTML = el;
        });
    }
}

function renderTable(parentElement: HTMLElement, data: Winner[]): void {
    const table = createElement('table', parentElement, ['table']);
    createTableRow(table, ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'], true);
    for (let i = 0; i < data.length; i += 1) {
        const { wins, time, car } = data[i];
        createTableRow(table, [
            (i + 1).toString(),
            addCarSVGImage(document.body, car.color, true),
            car.name,
            wins.toString(),
            time.toString(),
        ]);
    }
}

async function renderWinners(): Promise<void> {
    const containerWinners = createElement('div', document.body, ['winners', 'go-top']);
    const data = await getWinners(state.pageWinners, state.sort, state.order);
    renderItemsLabel(containerWinners, data.count, 'winners');
    renderPageNumber(containerWinners, state.pageWinners);
    renderTable(containerWinners, data.items);
    renderPaginationButtons(containerWinners, 'winners');
}

export default renderWinners;
