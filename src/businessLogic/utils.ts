import { driveCar, getCar, saveWinner, startEngine, stopEngine } from '../API/api';
import {
    CAR_MODELS,
    COLOR_HEX_LENGTH,
    DELAY_TIME,
    FINISH_OFFSET,
    LETTERS_HEX,
    MAX_CARS,
    MAX_WINNERS,
    MILLISECONDS_IN_ONE_SECOND,
    SCREEN_UPDATE_FREQUENCY,
    START,
    STRING,
    WRONG_DATA,
} from '../constants/constants';
import { Car, CarStatusEnum, CreateElementInterface, Layers } from '../constants/types';
import { state } from '../state/state';
import { renderWinnerFrame } from '../render/renderWinnerFrame';
import { changeElementState } from './garage';
import { updateWinnersTable } from './winners';

export const elementDomStorage = new Map<string, HTMLElement[]>();
export const tagsStorage = new Map<string, string[]>();

export function switchLayers(): void {
    Object.keys(Layers).forEach((layer) => {
        elementDomStorage.get(layer)?.forEach((el) => {
            el.classList.toggle('upper-layer');
        });
    });
}

export function getInputData(target: string, isId?: boolean): string {
    let data = '';
    elementDomStorage.get(target)?.forEach((el) => {
        data = isId ? (el as HTMLInputElement).id : (el as HTMLInputElement).value;
    });
    return data;
}

export function clearInputValue(target: string): void {
    elementDomStorage.get(target)?.forEach((el) => {
        const input = el;
        (input as HTMLInputElement).value = '';
    });
}

function getRandomNumber(from: number, to: number): number {
    return Math.floor(Math.random() * (to + from) + from);
}

export function generateRandomColor(): string {
    const to = LETTERS_HEX.length;
    let color = '#';
    for (let i = 0; i < COLOR_HEX_LENGTH; i += 1) {
        color += LETTERS_HEX[getRandomNumber(START, to)];
    }
    return color;
}

export function generateRandomModel(): string {
    const models = Object.keys(CAR_MODELS);
    const id = getRandomNumber(START, models.length);
    const type = getRandomNumber(START, CAR_MODELS[models[id] as keyof typeof CAR_MODELS].length);
    return `${models[id]} ${CAR_MODELS[models[id] as keyof typeof CAR_MODELS][type]}`;
}

export function updateMaxPage(items: number, tag: number): void {
    if (tag === Layers.garage) {
        const add = items % MAX_CARS > START ? 1 : START;
        const pages = Math.floor(items / MAX_CARS) + add;
        state.maxPagesGarage = pages;
    } else if (tag === Layers.winners) {
        const add = items % MAX_WINNERS > START ? 1 : START;
        const pages = Math.floor(items / MAX_WINNERS) + add;
        state.maxPagesWinners = pages;
    }
}

export function capitalizeWord(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
}

export function isActivePagination(tag: number): void {
    const currentPage = `page${capitalizeWord(Layers[tag])}` as keyof typeof state;
    const maxPages = `maxPages${capitalizeWord(Layers[tag])}` as keyof typeof state;
    if (state[currentPage] === 1) {
        changeElementState(`button-${Layers[tag]}-prev`, false);
    } else {
        changeElementState(`button-${Layers[tag]}-prev`, true);
    }
    if (state[currentPage] >= state[maxPages]) {
        changeElementState(`button-${Layers[tag]}-next`, false);
    } else {
        changeElementState(`button-${Layers[tag]}-next`, true);
    }
}

export async function checkDriveStatus(id: string): Promise<void> {
    const data = await driveCar(id);
    if (!data.success) {
        state.carStatus.set(id, CarStatusEnum[2]);
    }
}

function hideWinnerLabel(afterDelay: number): void {
    setTimeout(() => {
        elementDomStorage.get('winner-label-container')?.forEach((el) => {
            const copy = el;
            copy.style.display = 'none';
        });
        elementDomStorage.delete('winner-label-container');
    }, afterDelay);
}

async function showWinner(car: Car, duration: number): Promise<void> {
    renderWinnerFrame(car.name, duration);
    hideWinnerLabel(DELAY_TIME);
}

export function animation(endX: number, duration: number, target: HTMLElement, id: string): void {
    let currentX = START;
    const framesCount = (duration / MILLISECONDS_IN_ONE_SECOND) * SCREEN_UPDATE_FREQUENCY;
    const dx = (endX - currentX) / framesCount;
    const copy = target;
    const tick = async () => {
        currentX += dx;
        copy.style.transform = `translateX(${currentX}px)`;
        if (currentX < endX && state.carStatus.get(id) === CarStatusEnum[0]) {
            requestAnimationFrame(tick);
        } else if (state.carStatus.get(id) === CarStatusEnum[1]) {
            copy.style.transform = `translateX(0px)`;
        } else if (state.isRace && state.carStatus.get(id) === CarStatusEnum[0]) {
            state.isRace = false;
            const car = await getCar(id);
            showWinner(car, duration);
            await saveWinner(id, duration / MILLISECONDS_IN_ONE_SECOND);
            await updateWinnersTable();
        }
    };
    tick();
}

export function getCarImageElementByID(id: string): HTMLElement | undefined {
    return elementDomStorage.get('car-svg-container')?.reduce(
        (acc, image) => {
            if (image.attributes.getNamedItem('value')?.nodeValue === id) {
                acc.item = image;
            }
            return acc;
        },
        { item: elementDomStorage.get('car-svg-container')?.[START] }
    ).item;
}

export function changeCarStatus(id: string, status: string): void {
    const oldStatus = state.carStatus.get(id);
    if (oldStatus !== status) {
        state.carStatus.set(id, status);
    }
}

export async function startCarEngine(id: string): Promise<void> {
    const speed = await startEngine(id);
    const time = Math.floor(speed.distance / speed.velocity);
    let width = elementDomStorage.get('bottom-container')?.[START].offsetWidth;
    width = width ? width - FINISH_OFFSET : START;
    const carImageElement = getCarImageElementByID(id);
    if (width && carImageElement) {
        changeCarStatus(id, CarStatusEnum[0]);
        animation(width, time, carImageElement, id);
    }
}

export async function stopCarEngine(id: string): Promise<void> {
    changeCarStatus(id, CarStatusEnum[1]);
    changeElementState('button-start', true, id);
    changeElementState('button-stop', false, id);
    const car = getCarImageElementByID(id);
    await stopEngine(id);
    if (car) {
        car.style.transform = `translateX(0px)`;
    }
}

export async function startDrivingCar(id: string): Promise<void> {
    changeElementState('button-start', false, id);
    changeElementState('button-stop', true, id);
    await startCarEngine(id);
    checkDriveStatus(id);
}

function saveToMap<T, K>(map: Map<T, K[]>, key: T, value: K): void {
    if (map.has(key)) {
        map.get(key)?.push(value);
    } else {
        map.set(key, [value]);
    }
}

export function clearDOMStorage(tag: number): void {
    new Set(tagsStorage.get(Layers[tag]))?.forEach((cls) => {
        elementDomStorage.delete(cls);
    });
}

export function addToDOMStorage(element: HTMLElement, tag?: number): void {
    if (element && element.classList) {
        element.classList.forEach((cls) => {
            saveToMap(elementDomStorage, cls, element);
            if (tag !== undefined) {
                saveToMap(tagsStorage, Layers[tag], cls);
            }
        });
    }
}

export function createElement(options: CreateElementInterface): HTMLElement {
    const { type, parentElement, classes, text, attributes, tag } = options;
    if (type && parentElement && typeof type === STRING && parentElement instanceof HTMLElement) {
        const element: HTMLElement = document.createElement(type);
        if (classes) {
            element.classList.add(...classes);
        }
        element.textContent = text || '';
        if (attributes) {
            for (let i = 0; i < attributes.length; i += 1) {
                element.setAttribute(...attributes[i]);
            }
        }
        parentElement.appendChild(element);
        addToDOMStorage(element, tag);
        return element;
    }
    throw new Error(WRONG_DATA);
}

export function getSortOrder(fieldToSort: string, order: string): string {
    return fieldToSort && order ? `&_sort=${fieldToSort}&_order=${order}` : '';
}

export function isEveryCarReady(): boolean {
    let flag = true;
    elementDomStorage.get('button-start')?.forEach((button) => {
        if (button.classList.contains('inactive')) {
            flag = false;
        }
    });
    return flag;
}

export default { switchLayers, getInputData };
