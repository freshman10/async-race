import { createElement } from '../business logic/utils';
import { getSortID } from '../business logic/winners';
import { LAYERS, ONE, sortingStates, TABLE_HEADER_LABELS } from '../constants/constants';
import { Winner, WinnersResponse } from '../constants/types';
import { state } from '../state/state';
import { addCarSVGImage, renderItemsLabel, renderPageNumber, renderPaginationButtons } from './renderGarage';

function createTableRow(parentElement: HTMLElement, data: string[], isHeader?: boolean): void {
    const row = createElement({ type: 'tr', parentElement, classes: ['row'], tag: LAYERS[1] });
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
                tag: LAYERS[1],
            });
            element.innerHTML = el;
        });
    }
}

function renderTable(parentElement: HTMLElement, data: Winner[]): void {
    const table = createElement({ type: 'table', parentElement, classes: ['table'], tag: LAYERS[1] });
    createTableRow(table, TABLE_HEADER_LABELS, true);
    for (let i = 0; i < data.length; i += 1) {
        const { wins, time, car } = data[i];
        if (car) {
            createTableRow(table, [
                (i + ONE).toString(),
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
        classes: [LAYERS[1], 'go-top', `${state.activeLayer === LAYERS[1] ? 'upper-layer' : 'uselessClass'}`].filter(
            (cls) => cls !== 'uselessClass'
        ),
        tag: LAYERS[1],
    });
    renderItemsLabel(containerWinners, data.count, LAYERS[1]);
    renderPageNumber(containerWinners, state.pageWinners, LAYERS[1]);
    await renderTable(containerWinners, data.items);
    renderPaginationButtons(containerWinners, LAYERS[1]);
}

export default renderWinners;
