import { createElement } from './createHTMLelement';
import { renderItemsLabel, renderPageNumber, renderPaginationButtons } from './renderGarage';

function createTableRow(parentElement: HTMLElement, data: string[], isHeader?: boolean): void {
    const row = createElement('tr', parentElement, ['row']);
    const tag = isHeader ? 'th' : 'td';
    if (data[1]) {
        data.forEach((el) => {
            createElement(tag, row, ['table-item'], el);
        });
    }
}

function renderTable(parentElement: HTMLElement): void {
    const table = createElement('table', parentElement, ['table']);
    createTableRow(table, ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'], true);
    for (let i = 0; i < 10; i += 1) {
        createTableRow(table, [(i + 1).toString(), '12', '', '', '', '']);
    }
}

function renderWinners(): void {
    const containerWinners = createElement('div', document.body, ['winners', 'go-top']);
    renderItemsLabel(containerWinners, '0', 'winners');
    renderPageNumber(containerWinners, 0);
    renderTable(containerWinners);
    renderPaginationButtons(containerWinners, 'winners');
}

export default renderWinners;
