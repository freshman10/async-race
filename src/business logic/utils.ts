import { elementDomStorage } from '../render/createHTMLelement';

export function switchLayers(): void {
    ['garage', 'winners'].forEach((layer) => {
        elementDomStorage.get(layer)?.forEach((el) => {
            el.classList.toggle('upper-layer');
        });
    });
}

export function getInputData(target: string): string {
    let data = '';
    elementDomStorage.get(target)?.forEach((el) => {
        data = (el as HTMLInputElement).value;
    });
    return data;
}

export function clearInputValue(target: string): void {
    elementDomStorage.get(target)?.forEach((el) => {
        const input = el;
        (input as HTMLInputElement).value = '';
    });
}

export default { switchLayers, getInputData };
