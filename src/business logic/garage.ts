import getCars from '../API/api';
import { state } from '../constants/constants';
import { clearDOMStorage, elementDomStorage } from '../render/createHTMLelement';
import { renderGarage } from '../render/renderGarage';
import addControls from './controls';

function clearGarage(): void {
    elementDomStorage.get('garage')?.forEach((garage) => {
        garage.remove();
    });
}

export function updateGarage(): void {
    const data = getCars(state.page);
    clearGarage();
    clearDOMStorage('garage');
    renderGarage(data);
    addControls();
}

export function addEventListenerSelectButton() {
    console.log('later');
}

export default { updateGarage };
