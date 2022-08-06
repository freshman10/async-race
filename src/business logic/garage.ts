import getCars, { deleteCar, deleteWinner, getCar, getWinners } from '../API/api';
import { LAYERS, ONE } from '../constants/constants';
import { Car } from '../constants/types';
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

export function eraseElement(target: string): void {
    elementDomStorage.get(target)?.forEach((garage) => {
        garage.remove();
    });
}

export async function updateGarage(): Promise<void> {
    const data = getCars(state.pageGarage);
    eraseElement(LAYERS[0]);
    clearDOMStorage(LAYERS[0]);
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
            await deleteWinner(id);
            const data = await getWinners(state.pageWinners, state.sort, state.order);
            updateWinnersTable(data);
        });
    });
}

export function addEventListenerPREVButton(): void {
    elementDomStorage.get('button-garage-prev')?.forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('inactive')) {
                state.pageGarage -= ONE;
                updateGarage();
            }
        });
    });
}

export function addEventListenerNextButton(): void {
    elementDomStorage.get('button-garage-next')?.forEach((button) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('inactive')) {
                state.pageGarage += ONE;
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
                changeElementState('button-race', false);
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
                if (isEveryCarReady()) {
                    changeElementState('button-reset', false);
                    changeElementState('button-race', true);
                }
            }
        });
    });
}

export default { updateGarage };
