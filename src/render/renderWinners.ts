import { createElement } from '../business logic/utils';
import { getSortID } from '../business logic/winners';
import { sortingStates } from '../constants/constants';
import { Winner, WinnersResponse } from '../constants/types';
import { state } from '../state/state';
import { addCarSVGImage, renderItemsLabel, renderPageNumber, renderPaginationButtons } from './renderGarage';

function createTableRow(parentElement: HTMLElement, data: string[], isHeader?: boolean): void {
    const row = createElement('tr', parentElement, ['row'], '', [], 'winners'); // apply destructuring
    const tag = isHeader ? 'th' : 'td';
    if (data[1]) {
        data.forEach((el) => {
            const element = createElement(
                tag,
                row,
                [
                    'table-item',
                    `${isHeader && ['Wins', 'Best time (seconds)'].includes(el) ? 'sort' : 'item'}`, // check it
                    `${
                        getSortID(el) === state.sort ? sortingStates[state.order as keyof typeof sortingStates] : 'auto'
                    }`,
                ],
                '',
                [],
                'winners'
            );
            element.innerHTML = el;
        });
    }
}

function renderTable(parentElement: HTMLElement, data: Winner[]): void {
    const table = createElement('table', parentElement, ['table'], '', [], 'winners');
    createTableRow(table, ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'], true);
    for (let i = 0; i < data.length; i += 1) {
        const { wins, time, car } = data[i];
        if (car) {
            createTableRow(table, [
                (i + 1).toString(),
                addCarSVGImage(document.body, car.color, true),
                car.name,
                wins.toString(),
                time.toString(),
            ]);
        }
    }
}

async function renderWinners(data: WinnersResponse): Promise<void> {
    const containerWinners = createElement(
        'div',
        document.body,
        ['winners', 'go-top', `${state.activeLayer === 'winners' ? 'upper-layer' : 'bottom'}`],
        '',
        [],
        'winners'
    );
    renderItemsLabel(containerWinners, data.count, 'winners');
    renderPageNumber(containerWinners, state.pageWinners, 'winners');
    await renderTable(containerWinners, data.items);
    renderPaginationButtons(containerWinners, 'winners');
}

export default renderWinners;
