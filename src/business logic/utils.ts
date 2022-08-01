import { CAR_MODELS } from '../constants/constants';
import { elementDomStorage } from '../render/createHTMLelement';

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

export default { switchLayers, getInputData };
