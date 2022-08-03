import { changeCarStatus, createElement, isActivePagination, updateMaxPage } from '../business logic/utils';
import { CONTAINER, CRUD_CONTAINER_CLASS, state } from '../constants/constants';
import { Car, CarsResponse } from '../constants/types';

require('../assets/icons/sports-car.svg');
require('../assets/icons/finish.png');

export function addCarSVGImage(parentElement: HTMLElement, color: string, isNeededString = false): string {
    const template = `<svg xmlns="http://www.w3.org/2000/svg" class = "car-image ${
        isNeededString ? 'car-item' : ''
    }" enable-background="new 0 0 512 512" viewBox="0 0 512 512"><path fill="${color}" d="M417.3 349c-29.6 0-53.7-24.1-53.7-53.7s24.1-53.7 53.7-53.7 53.7 24.1 53.7 53.7S446.9 349 417.3 349zM417.3 251.5c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7 43.7-19.6 43.7-43.7S441.4 251.5 417.3 251.5zM93.1 349c-29.6 0-53.7-24.1-53.7-53.7s24.1-53.7 53.7-53.7 53.7 24.1 53.7 53.7S122.7 349 93.1 349zM93.1 251.5c-24.1 0-43.7 19.6-43.7 43.7S69 339 93.1 339s43.7-19.6 43.7-43.7S117.2 251.5 93.1 251.5z"/><path fill="${color}" d="M93.1 324.2c-15.9 0-28.9-13-28.9-28.9s13-28.9 28.9-28.9 28.9 13 28.9 28.9S109 324.2 93.1 324.2zM93.1 276.3c-10.4 0-18.9 8.5-18.9 18.9s8.5 18.9 18.9 18.9 18.9-8.5 18.9-18.9S103.5 276.3 93.1 276.3zM417.1 324.2c-15.9 0-28.9-13-28.9-28.9s13-28.9 28.9-28.9 28.9 13 28.9 28.9S433 324.2 417.1 324.2zM417.1 276.3c-10.4 0-18.9 8.5-18.9 18.9s8.5 18.9 18.9 18.9 18.9-8.5 18.9-18.9S427.5 276.3 417.1 276.3z"/><path fill="${color}" d="M495,324h-35.3v-10H490v-18.8c0-0.7,0.1-1.4,0.4-2l10.4-23.7l-19.9-14.9
    c-22-16.5-49.2-25.6-76.7-25.6H362c-1,0-2-0.3-2.8-0.9l-44.3-30.1c-24.2-16.4-52.4-25.1-81.6-25.1H128.7L10,209.2v4.8h6
    c2.8,0,5,2.2,5,5v43c0,2.8-2.2,5-5,5h-6v27.3L25,314h25.6v10H22.5c-1.6,0-3-0.7-4-2L1,299c-0.7-0.9-1-1.9-1-3v-34
    c0-2.8,2.2-5,5-5h6v-33H5c-2.8,0-5-2.2-5-5v-13.5c0-2.2,1.4-4.1,3.5-4.8l123-37.5c0.5-0.1,1-0.2,1.5-0.2h105.3
    c31.2,0,61.4,9.3,87.2,26.8l43,29.2h40.7c29.6,0,59,9.8,82.7,27.6l23.1,17.3c1.9,1.4,2.5,3.9,1.6,6L500,296.3V319
    C500,321.8,497.8,324,495,324z"/><rect width="71.6" height="10" x="303.2" y="314" fill="${color}"/><rect width="147.7" height="10" x="135.5" y="314" fill="${color}"/><path fill="${color}" d="M37.7 267H16c-2.8 0-5-2.2-5-5v-43c0-2.8 2.2-5 5-5h21.8c2 0 3.8 1.2 4.6 3l10.5 24.5c.6 1.4.5 3.1-.2 4.4l-10.5 18.5C41.2 266 39.5 267 37.7 267zM21 257h13.8l7.8-13.8L34.5 224H21V257zM331 227h-75c-.3 0-.5 0-.8-.1l-100.5-15.5 1.5-9.9L256.4 217h59l-4.1-2.9c-24.8-17.7-54-27.1-84.5-27.1h-89.1l-26.2 7.7 24.8 3.8-1.5 9.9-47-7.2c-2.3-.4-4.1-2.3-4.2-4.6-.2-2.3 1.3-4.5 3.6-5.1l48.5-14.2c.5-.1.9-.2 1.4-.2h89.8c32.6 0 63.8 10 90.3 28.9l16.8 12c1.8 1.3 2.5 3.5 1.9 5.6C335.1 225.6 333.2 227 331 227z"/><path fill="${color}" d="M195.2 217.7c-.3 0-.5 0-.8-.1l-20.4-3.1c-2.4-.4-4.2-2.5-4.2-4.9V182c0-2.8 2.2-5 5-5h20.4c2.8 0 5 2.2 5 5v30.6c0 1.5-.6 2.8-1.7 3.8C197.6 217.2 196.4 217.7 195.2 217.7zM179.8 205.2l10.4 1.6V187h-10.4V205.2zM356.2 300.2l-162.6-9.7c-1.4-.1-2.7-.8-3.6-1.9l-30.9-39c-1-1.2-1.3-2.8-.9-4.3s1.4-2.7 2.8-3.4l32.3-14.5c.9-.4 1.8-.5 2.8-.4l158.4 24-1.5 9.9L196 237.2l-25 11.2 25.5 32.2 160.4 9.6L356.2 300.2z"/><rect width="31" height="10" x="476" y="263" fill="${color}"/></svg>`;
    if (!isNeededString) {
        parentElement.insertAdjacentHTML('beforeend', template);
    }
    return template;
}

function renderInputLine(parentElement: HTMLElement, inputPurpose: string): HTMLElement {
    const containerInput = createElement(
        'div',
        parentElement,
        [CONTAINER, `container-${inputPurpose}`],
        '',
        [],
        'garage'
    );
    createElement('input', containerInput, ['input', `text-${inputPurpose}`], '', [['type', 'text']], 'garage');
    createElement('input', containerInput, ['input', `color-${inputPurpose}`], '', [['type', 'color']], 'garage');
    createElement(
        'button',
        containerInput,
        ['button', `button-${inputPurpose}`, 'inactive'],
        inputPurpose.toUpperCase(),
        [],
        'garage'
    );
    return containerInput;
}

function renderCRUDBox(parentElement: HTMLElement): void {
    const containerCRUD = createElement('div', parentElement, [CRUD_CONTAINER_CLASS], '', [], 'garage');
    renderInputLine(containerCRUD, 'create');
    renderInputLine(containerCRUD, 'update');
    const containerButtons = createElement('div', containerCRUD, [CONTAINER], '', [], 'garage');
    createElement('button', containerButtons, ['button', 'button-race'], 'RACE', [], 'garage');
    createElement('button', containerButtons, ['button', 'button-reset', 'inactive'], 'RESET', [], 'garage');
    createElement('button', containerButtons, ['button', 'button-generate'], 'GENERATE CARS', [], 'garage');
}

export function renderItemsLabel(parentElement: HTMLElement, items: string | null, label: string): void {
    const containerGarageItems = createElement('div', parentElement, [CONTAINER], '', [], label.toLowerCase());
    createElement(
        'p',
        containerGarageItems,
        [`${label}-items`, 'label'],
        `${label.toUpperCase()} (${items || '0'})`,
        [],
        label.toLowerCase()
    );
    updateMaxPage(Number(items), label.toLowerCase());
}

export function renderPageNumber(parentElement: HTMLElement, pageNumber: number): void {
    const containerGarageItems = createElement('div', parentElement, [CONTAINER], '', [], 'garage');
    createElement('p', containerGarageItems, ['page-number', 'label'], `Page #${pageNumber}`, [], 'garage');
}

function renderCar(parentElement: HTMLElement, car: Car): void {
    const containerCar = createElement('div', parentElement, ['container-car'], '', [], 'garage');
    const upperLine = createElement('div', containerCar, [CONTAINER], '', [], 'garage');
    createElement('button', upperLine, ['button', 'button-select'], 'SELECT', [['value', `${car.id || ''}`]], 'garage');
    createElement('button', upperLine, ['button', 'button-remove'], 'REMOVE', [['value', `${car.id || ''}`]], 'garage');
    createElement('p', upperLine, ['car-name'], car.name, [], 'garage');
    const bottomLine = createElement('div', parentElement, [CONTAINER, 'bottom-container'], '', [], 'garage');
    createElement('button', bottomLine, ['button', 'button-start'], 'A', [['value', `${car.id || ''}`]], 'garage');
    createElement(
        'button',
        bottomLine,
        ['button', 'button-stop', 'inactive'],
        'B',
        [['value', `${car.id || ''}`]],
        'garage'
    );
    const carSVGContainer = createElement(
        'div',
        bottomLine,
        ['car-svg-container'],
        '',
        [['value', `${car.id || ''}`]],
        'garage'
    );
    addCarSVGImage(carSVGContainer, car.color);
    createElement(
        'img',
        bottomLine,
        ['finish-image'],
        '',
        [
            ['src', './assets/img/finish.png'],
            ['alt', 'finish flag'],
        ],
        'garage'
    );
    if (car.id) {
        changeCarStatus(car.id?.toString(), 'stopped');
    }
}

function renderCarFrame(parentElement: HTMLElement, cars: Car[]): void {
    cars.forEach((car) => {
        renderCar(parentElement, car);
    });
}

async function renderCarsTrack(parentElement: HTMLElement, cars: Promise<CarsResponse>): Promise<void> {
    const containerCarsTrack = createElement('div', parentElement, ['container-track'], '', [], 'garage');
    const data = await cars;
    renderItemsLabel(containerCarsTrack, data.count, 'garage');
    renderPageNumber(containerCarsTrack, state.page);
    const containerCarFrame = createElement('div', containerCarsTrack, ['container-cars'], '', [], 'garage');
    renderCarFrame(containerCarFrame, data.items);
}

export function renderPaginationButtons(parentElement: HTMLElement, tag: string): void {
    const container = createElement('div', parentElement, ['pagination'], '', [], tag);
    createElement('button', container, ['button', 'button-prev', `button-${tag}-prev`], 'PREV', [], tag);
    createElement('button', container, ['button', 'button-next', `button-${tag}-next`], 'NEXT', [], tag);
    isActivePagination(tag);
}

export async function renderGarage(cars: Promise<CarsResponse>): Promise<void> {
    const containerGarage = createElement('div', document.body, ['garage', 'upper-layer'], '', [], 'garage');
    renderCRUDBox(containerGarage);
    await renderCarsTrack(containerGarage, cars);
    renderPaginationButtons(containerGarage, 'garage');
}

export default { renderGarage, renderPageNumber, renderItemsLabel };
