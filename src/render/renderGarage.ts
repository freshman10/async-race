import { CONTAINER, CRUD_CONTAINER_CLASS } from '../constants/constants';
import { createElement } from './createHTMLelement';

function renderInputLine(parentElement: HTMLElement, inputPurpose: string): HTMLElement {
    const containerInput = createElement('div', parentElement, [CONTAINER, `container-${inputPurpose}`]);
    createElement('input', containerInput, ['input', `text-${inputPurpose}`], '', [['type', 'text']]);
    createElement('input', containerInput, ['input', `color-${inputPurpose}`], '', [['type', 'color']]);
    createElement('button', containerInput, ['button', `button-${inputPurpose}`], inputPurpose.toUpperCase());
    return containerInput;
}

function renderCRUDBox(): void {
    const containerCRUD = createElement('div', document.body, [CRUD_CONTAINER_CLASS]);
    renderInputLine(containerCRUD, 'create');
    renderInputLine(containerCRUD, 'update');
    const containerButtons = createElement('div', containerCRUD, [CONTAINER]);
    createElement('button', containerButtons, ['button', 'button-race'], 'RACE');
    createElement('button', containerButtons, ['button', 'button-reset'], 'RESET');
    createElement('button', containerButtons, ['button', 'button-generate'], 'GENERATE CARS');
}

function renderGarageItems(parentElement: HTMLElement, items: number): void {
    const containerGarageItems = createElement('div', parentElement, [CONTAINER]);
    createElement('p', containerGarageItems, ['garage-items', 'label'], `Garage (${items})`);
}

function renderPageNumber(parentElement: HTMLElement, pageNumber: number): void {
    const containerGarageItems = createElement('div', parentElement, [CONTAINER]);
    createElement('p', containerGarageItems, ['page-number', 'label'], `Page #${pageNumber}`);
}
function renderCar(parentElement: HTMLElement): void {
    const containerCar = createElement('div', parentElement, ['container-car']);
    const upperLine = createElement('div', containerCar, [CONTAINER]);
    createElement('button', upperLine, ['button', 'button-select'], 'SELECT');
    createElement('button', upperLine, ['button', 'button-remove'], 'REMOVE');
    createElement('p', upperLine, ['car-name'], 'Tesla');
    // stopped here
}
function renderCarFrame(parentElement: HTMLElement): void {
    for (let i = 0; i < 7; i += 1) {
        renderCar(parentElement);
    }
}

function renderCarsTrack(): void {
    const containerCarsTrack = createElement('div', document.body, ['container-track']);
    renderGarageItems(containerCarsTrack, 0);
    renderPageNumber(containerCarsTrack, 0);
    const containerCarFrame = createElement('div', containerCarsTrack, ['container-cars']);
    renderCarFrame(containerCarFrame);
}

export function renderGarage(): void {
    renderCRUDBox();
    renderCarsTrack();
}

export default renderGarage;
