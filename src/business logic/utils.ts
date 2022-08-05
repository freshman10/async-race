import { driveCar, getCar, getWinners, saveWinner, startEngine, stopEngine } from '../API/api';
import { CAR_MODELS, STRING, WRONG_DATA } from '../constants/constants';
import { Car } from '../constants/types';
import { state } from '../state/state';
import { renderWinnerFrame } from '../render/renderWinnerFrame';
import { changeElementState } from './garage';
import { updateWinnersTable } from './winners';

export const elementDomStorage = new Map<string, HTMLElement[]>();
export const tagsStorage = new Map<string, string[]>();

export function switchLayers(): void {
    ['garage', 'winners'].forEach((layer) => {
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
    const lettersHEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const to = lettersHEX.length;
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += lettersHEX[getRandomNumber(0, to)];
    }
    return color;
}

export function generateRandomModel(): string {
    const models = Object.keys(CAR_MODELS);
    const id = getRandomNumber(0, models.length);
    const type = getRandomNumber(0, CAR_MODELS[models[id] as keyof typeof CAR_MODELS].length);
    return `${models[id]} ${CAR_MODELS[models[id] as keyof typeof CAR_MODELS][type]}`;
}

export function updateMaxPage(items: number, tag: string): void {
    if (tag === 'garage') {
        const add = items % 7 > 0 ? 1 : 0;
        const pages = Math.floor(items / 7) + add;
        state.maxPagesGarage = pages;
    } else if (tag === 'winners') {
        const add = items % 10 > 0 ? 1 : 0;
        const pages = Math.floor(items / 7) + add;
        state.maxPagesWinners = pages;
    }
}

export function isActivePagination(tag: string): void {
    if (tag === 'garage') {
        if (state.page === 1) {
            changeElementState('button-garage-prev', false);
        } else {
            changeElementState('button-garage-prev', true);
        }
        if (state.page >= state.maxPagesGarage) {
            changeElementState('button-garage-next', false);
        } else {
            changeElementState('button-garage-next', true);
        }
    } else if (tag === 'winners') {
        if (state.pageWinners === 1) {
            changeElementState('button-winners-prev', false);
        } else {
            changeElementState('button-winners-prev', true);
        }
        if (state.pageWinners >= state.maxPagesWinners) {
            changeElementState('button-winners-next', false);
        } else {
            changeElementState('button-winners-next', true);
        }
    }
}

export async function checkDriveStatus(id: string): Promise<void> {
    const data = await driveCar(id);
    if (!data.success) {
        state.carStatus.set(id, 'drive');
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
    hideWinnerLabel(5000);
}

export function animation(endX: number, duration: number, target: HTMLElement, id: string): void {
    let currentX = target.offsetLeft - 89;
    console.log(currentX);
    const framesCount = (duration / 1000) * 60;
    const dx = (endX - currentX) / framesCount;
    const copy = target;
    const tick = async () => {
        currentX += dx;
        copy.style.transform = `translateX(${currentX}px)`;
        if (currentX < endX && state.carStatus.get(id) === 'started') {
            requestAnimationFrame(tick);
        } else if (state.carStatus.get(id) === 'stopped') {
            copy.style.transform = `translateX(0px)`;
        } else if (state.isRace && state.carStatus.get(id) === 'started') {
            state.isRace = false;
            const car = await getCar(id);
            showWinner(car, duration);
            await saveWinner(id, duration / 1000);
            const data = await getWinners(state.pageWinners, state.sort, state.order);
            await updateWinnersTable(data);
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
        { item: elementDomStorage.get('car-svg-container')?.[0] }
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
    let width = elementDomStorage.get('bottom-container')?.[0].offsetWidth;
    width = width ? width - 200 : 0;
    const carImageElement = getCarImageElementByID(id);
    if (width && carImageElement) {
        changeCarStatus(id, 'started');
        animation(width, time, carImageElement, id);
    }
}

export async function stopCarEngine(id: string): Promise<void> {
    changeCarStatus(id, 'stopped');
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

export function clearDOMStorage(tag: string): void {
    new Set(tagsStorage.get(tag))?.forEach((cls) => {
        elementDomStorage.delete(cls);
    });
}

export function addToDOMStorage(element: HTMLElement, tag?: string): void {
    if (element && element.classList) {
        element.classList.forEach((cls) => {
            saveToMap(elementDomStorage, cls, element);
            if (tag) {
                saveToMap(tagsStorage, tag, cls);
            }
        });
    }
}

export function createElement(
    type: string,
    parentElement: HTMLElement,
    classes?: string[],
    text?: string,
    attributes?: [string, string][],
    tag?: string
): HTMLElement {
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
