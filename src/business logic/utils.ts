import { elementDomStorage } from '../render/createHTMLelement';

export function switchLayers(): void {
    ['garage', 'winners'].forEach((layer) => {
        elementDomStorage.get(layer)?.forEach((el) => {
            el.classList.toggle('upper-layer');
        });
    });
}

export default { switchLayers };
