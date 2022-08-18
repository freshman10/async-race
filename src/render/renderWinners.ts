import { createElement } from '../businessLogic/utils';
import { getSortID } from '../businessLogic/winners';
import { sortingStates, TABLE_HEADER_LABELS } from '../constants/constants';
import { Layers, Winner, WinnersResponse } from '../constants/types';
import { state } from '../state/state';
import { addCarSVGImage, renderItemsLabel, renderPageNumber, renderPaginationButtons } from './renderGarage';

function createTableRow(parentElement: HTMLElement, data: string[], isHeader?: boolean): void {
    const row = createElement({ type: 'tr', parentElement, classes: ['row'], tag: Layers.winners });
    const tag = isHeader ? 'th' : 'td';
    if (data[1]) {
        data.forEach((el) => {
            const element = createElement({
                type: tag,
                parentElement: row,
                classes: [
                    'table-item',
                    `${isHeader && ['Wins', 'Best time (seconds)'].includes(el) ? 'sort' : 'uselessClass'}`, // checked: (Best time (seconds)'].includes(el) && 'sort') returns false if first element is false
                    `${getSortID(el) === state.sort ? sortingStates[state.order] : 'uselessClass'}`,
                ].filter((cls) => cls !== 'uselessClass'),
                tag: Layers.winners,
            });
            element.innerHTML = el;
        });
    }
}

function renderTable(parentElement: HTMLElement, data: Winner[]): void {
    const table = createElement({ type: 'table', parentElement, classes: ['table'], tag: Layers.winners });
    createTableRow(table, TABLE_HEADER_LABELS, true);
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
    const containerWinners = createElement({
        type: 'div',
        parentElement: document.body,
        classes: [
            Layers[1],
            'go-top',
            `${state.activeLayer === Layers.winners ? 'upper-layer' : 'uselessClass'}`,
        ].filter((cls) => cls !== 'uselessClass'),
        tag: Layers.winners,
    });
    renderItemsLabel(containerWinners, data.count, Layers.winners);
    renderPageNumber(containerWinners, state.pageWinners, Layers.winners);
    await renderTable(containerWinners, data.items);
    renderPaginationButtons(containerWinners, Layers.winners);
}

export default renderWinners;
