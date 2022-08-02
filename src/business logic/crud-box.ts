import getCars, { createCar, updateCar } from '../API/api';
import { state } from '../constants/constants';
import { elementDomStorage } from '../render/createHTMLelement';
import { changeElementState, updateGarage } from './garage';
import {
    checkDriveStatus,
    generateRandomColor,
    generateRandomModel,
    getInputData,
    startCarEngine,
    stopCarEngine,
} from './utils';

export function isEmptyInputListener(target: string): void {
    elementDomStorage.get(target)?.forEach((input) => {
        input.addEventListener('keyup', () => {
            const createButton = elementDomStorage.get('button-create')?.slice(-1)[0];
            if (createButton) {
                if ((input as HTMLInputElement).value) {
                    createButton.classList.remove('inactive');
                } else {
                    createButton.classList.add('inactive');
                }
            }
        });
    });
}

export function addNewCarButtonListener(): void {
    elementDomStorage.get('button-create')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const name = getInputData('text-create');
            const color = getInputData('color-create');
            if (name && color) {
                await createCar({ name, color });
                updateGarage();
            }
        });
    });
}

export function addUpdateButtonListener(): void {
    elementDomStorage.get('button-update')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const name = getInputData('text-update');
            const color = getInputData('color-update');
            const id = getInputData('text-update', true);
            if (name && color) {
                await updateCar(id, {
                    name,
                    color,
                });
                updateGarage();
            }
        });
    });
}

export function addEventListenerGenerateCars(): void {
    elementDomStorage.get('button-generate')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const promises = [];
            for (let i = 0; i < 100; i += 1) {
                const color = generateRandomColor();
                const name = generateRandomModel();
                promises.push(
                    createCar({
                        name,
                        color,
                    })
                );
            }
            await Promise.allSettled(promises);
            updateGarage();
        });
    });
}

export function addEventListenerResetButton(): void {
    elementDomStorage.get('button-reset')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const carsData = await getCars(state.page);
            carsData.items.forEach((car) => {
                if (car.id) {
                    stopCarEngine(car.id.toString());
                }
            });
            changeElementState('button-reset', false);
            changeElementState('button-race', true);
        });
    });
}

export function addEventListenerRaceButton(): void {
    elementDomStorage.get('button-race')?.forEach((button) => {
        button.addEventListener('click', async () => {
            if (!button.classList.contains('inactive')) {
                button.classList.add('inactive');
                const cars = await getCars(state.page);
                changeElementState('button-reset', true);
                cars.items.forEach((car) => {
                    if (car.id) {
                        const id = car.id.toString();
                        startCarEngine(id);
                        checkDriveStatus(id);
                        changeElementState('button-start', false, id);
                        changeElementState('button-stop', true, id);
                    }
                });
            }
        });
    });
}
