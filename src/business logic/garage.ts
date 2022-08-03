import getCars, { deleteCar, getCar } from '../API/api';
import { state } from '../constants/constants';
import { Car } from '../constants/types';
import { renderGarage } from '../render/renderGarage';
import addControls from './controls';
import { checkDriveStatus, clearDOMStorage, elementDomStorage, startCarEngine, stopCarEngine } from './utils';

function clearGarage(): void {
    elementDomStorage.get('garage')?.forEach((garage) => {
        garage.remove();
    });
}

export async function updateGarage(): Promise<void> {
    const data = getCars(state.page);
    clearGarage();
    clearDOMStorage('garage');
    await renderGarage(data);
    addControls();
}

function setValueToInputElement(target: string, value: string): void {
    elementDomStorage.get(target)?.forEach((input) => {
        const inputCopy = input as HTMLInputElement;
        inputCopy.value = value;
    });
}

function setIDToInputElement(target: string, id?: number): void {
    if (id) {
        elementDomStorage.get(target)?.forEach((el) => {
            const copy = el;
            copy.id = id.toString();
        });
    }
}

function pushCarDataToInputs(carData: Car): void {
    setValueToInputElement('text-update', carData.name);
    setValueToInputElement('color-update', carData.color);
    setIDToInputElement('text-update', carData.id);
}

export function changeElementState(target: string, setActive: boolean, id?: string): void {
    elementDomStorage.get(target)?.forEach((el) => {
        if (id) {
            if ((el as HTMLInputElement).value === id) {
                if (setActive) {
                    el.classList.remove('inactive');
                } else {
                    el.classList.add('inactive');
                }
            }
        } else if (setActive) {
            el.classList.remove('inactive');
        } else {
            el.classList.add('inactive');
        }
    });
}

export function addEventListenerSelectButton(): void {
    elementDomStorage.get('button-select')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const carID = (button as HTMLButtonElement).value;
            const carData = await getCar(carID);
            pushCarDataToInputs(carData);
            changeElementState('button-update', true);
            changeElementState('button-select', true);
            button.classList.add('inactive');
        });
    });
}

export function addEventListenerRemoveButton(): void {
    elementDomStorage.get('button-remove')?.forEach((button) => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const id = (button as HTMLButtonElement).value;
            await deleteCar(id);
            await updateGarage();
        });
    });
}

export function addEventListenerPREVButton(): void {
    elementDomStorage.get('button-garage-prev')?.forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('inactive')) {
                state.page -= 1;
                updateGarage();
            }
        });
    });
}

export function addEventListenerNextButton(): void {
    elementDomStorage.get('button-garage-next')?.forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('inactive')) {
                state.page += 1;
                updateGarage();
            }
        });
    });
}

export function addEventListenerStartEngine(): void {
    elementDomStorage.get('button-start')?.forEach((button) => {
        button.addEventListener('click', async () => {
            if (!button.classList.contains('inactive')) {
                const id = (button as HTMLButtonElement).value;
                changeElementState('button-start', false, id);
                changeElementState('button-stop', true, id);
                changeElementState('button-reset', true);
                await startCarEngine(id);
                checkDriveStatus(id);
            }
        });
    });
}

export function addEventListenerStopEngine(): void {
    elementDomStorage.get('button-stop')?.forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('inactive')) {
                const id = (button as HTMLButtonElement).value;
                stopCarEngine(id);
            }
        });
    });
}

export default { updateGarage };
