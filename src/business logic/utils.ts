import { driveCar, startEngine, stopEngine } from '../API/api';
import { CAR_MODELS, state } from '../constants/constants';
import { elementDomStorage } from '../render/createHTMLelement';
import { changeElementState } from './garage';

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
    const add = items % 7 > 0 ? 1 : 0;
    const pages = Math.floor(items / 7) + add;
    if (tag === 'garage') {
        state.maxPagesGarage = pages;
    } else if (tag === 'winners') {
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
    }
}

export async function checkDriveStatus(id: string): Promise<void> {
    const data = await driveCar(id);
    if (!data.success) {
        state.carStatus.set(id, 'drive');
    }
}

export function animation(endX: number, duration: number, target: HTMLElement, id: string): void {
    let currentX = target.offsetLeft;
    const framesCount = (duration / 1000) * 60;
    const dx = (endX - currentX) / framesCount;
    const copy = target;
    const tick = () => {
        currentX += dx;
        copy.style.transform = `translateX(${currentX}px)`;
        if (currentX < endX && state.carStatus.get(id) === 'started') {
            requestAnimationFrame(tick);
        } else if (state.carStatus.get(id) === 'stopped') {
            copy.style.transform = `translateX(0px)`;
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
    width = width ? width - 190 : 0;
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

export default { switchLayers, getInputData };
