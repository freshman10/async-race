import getCars, { deleteCar, getCar } from '../API/api';
import { state } from '../constants/constants';
import { Car } from '../constants/types';
import { clearDOMStorage, elementDomStorage } from '../render/createHTMLelement';
import { renderGarage } from '../render/renderGarage';
import addControls from './controls';

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

function setElementActive(target: string, id?: string): void {
    elementDomStorage.get(target)?.forEach((el) => {
        if (id) {
            if ((el as HTMLInputElement).value === id) {
                el.classList.remove('inactive');
            }
        } else {
            el.classList.remove('inactive');
        }
    });
}

export function addEventListenerSelectButton(): void {
    elementDomStorage.get('button-select')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const carID = (button as HTMLButtonElement).value;
            const carData = await getCar(carID);
            pushCarDataToInputs(carData);
            setElementActive('button-update');
            setElementActive('button-select');
            button.classList.add('inactive');
        });
    });
}

export function addEventListenerRemoveButton(): void {
    elementDomStorage.get('button-remove')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const id = (button as HTMLButtonElement).value;
            await deleteCar(id);
            await updateGarage();
        });
    });
}

export default { updateGarage };
