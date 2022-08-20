import getCars, { deleteCar, deleteWinner, getCar } from '../API/api';
import { PAGINATION_GARAGE } from '../constants/constants';
import { Car, Layers } from '../constants/types';
import { renderGarage } from '../render/renderGarage';
import state from '../state/state';
import { controlsGarage } from './controls';
import {
    checkDriveStatus,
    clearDOMStorage,
    elementDomStorage,
    isEveryCarReady,
    startCarEngine,
    stopCarEngine,
} from './utils';
import updateWinnersTable from './winners';

export function eraseElement(target: number): void {
    elementDomStorage.get(Layers[target])?.forEach((element) => {
        element.remove();
    });
}

export async function updateGarage(): Promise<void> {
    const data = getCars(state.pageGarage);
    eraseElement(Layers.garage);
    clearDOMStorage(Layers.garage);
    await renderGarage(data);
    controlsGarage();
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

function switchObjectState(obj: HTMLElement, setActive: boolean): void {
    if (setActive) {
        obj.classList.remove('inactive');
    } else {
        obj.classList.add('inactive');
    }
}

function changeElementStateById(target: string, setActive: boolean, id: string): void {
    elementDomStorage.get(target)?.forEach((el) => {
        if ((el as HTMLInputElement).value === id) {
            switchObjectState(el, setActive);
        }
    });
}

export function changeElementState(target: string, setActive: boolean, id?: string): void {
    if (id) {
        changeElementStateById(target, setActive, id);
    } else {
        elementDomStorage.get(target)?.forEach((el) => {
            switchObjectState(el, setActive);
        });
    }
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
            await deleteWinner(id);
            await updateWinnersTable();
        });
    });
}

export function addEventListenerPaginationButtonGarage(): void {
    PAGINATION_GARAGE.forEach((el) => {
        elementDomStorage.get(el)?.forEach((button) => {
            button.addEventListener('click', async () => {
                if (!button.classList.contains('inactive')) {
                    if (button.classList.contains('button-next')) {
                        state.pageGarage += 1;
                    } else {
                        state.pageGarage -= 1;
                    }
                    await updateGarage();
                }
            });
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
                changeElementState('button-race', false);
                await startCarEngine(id);
                await checkDriveStatus(id);
            }
        });
    });
}

export function addEventListenerStopEngine(): void {
    elementDomStorage.get('button-stop')?.forEach((button) => {
        button.addEventListener('click', async () => {
            if (!button.classList.contains('inactive')) {
                const id = (button as HTMLButtonElement).value;
                await stopCarEngine(id);
                if (isEveryCarReady()) {
                    changeElementState('button-reset', false);
                    changeElementState('button-race', true);
                }
            }
        });
    });
}

export default { updateGarage };
