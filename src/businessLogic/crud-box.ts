import getCars, { createCar, updateCar } from '../API/api';
import {
    activationConfig,
    deactivationConfig,
    LAST_INDEX,
    NUMBER_OF_CARS_TO_GENERATE,
    START,
} from '../constants/constants';
import { Layers } from '../constants/types';
import state from '../state/state';
import { changeElementState, updateGarage } from './garage';
import {
    clearInputValue,
    elementDomStorage,
    generateRandomColor,
    generateRandomModel,
    getInputData,
    isActivePagination,
    startDrivingCar,
    stopCarEngine,
} from './utils';
import updateWinnersTable from './winners';

export function isEmptyInputListener(target: string): void {
    elementDomStorage.get(target)?.forEach((input) => {
        input.addEventListener('keyup', () => {
            const createButton = elementDomStorage.get('button-create')?.slice(LAST_INDEX)[START];
            if ((input as HTMLInputElement).value) {
                createButton?.classList.remove('inactive');
            } else {
                createButton?.classList.add('inactive');
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
                await updateGarage();
            }
        });
    });
}

export function addUpdateButtonListener(): void {
    elementDomStorage.get('button-update')?.forEach((button) => {
        button.addEventListener('click', async () => {
            if (!button.classList.contains('inactive')) {
                const name = getInputData('text-update');
                const color = getInputData('color-update');
                const id = getInputData('text-update', true);
                if (name && color) {
                    await updateCar(id, {
                        name,
                        color,
                    });
                    await updateGarage();
                    await updateWinnersTable();
                }
            }
        });
    });
}

export function addEventListenerGenerateCars(): void {
    elementDomStorage.get('button-generate')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const promises = [];
            for (let i = 0; i < NUMBER_OF_CARS_TO_GENERATE; i += 1) {
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
            await updateGarage();
        });
    });
}

export function addEventListenerResetButton(): void {
    elementDomStorage.get('button-reset')?.forEach((button) => {
        button.addEventListener('click', async () => {
            const carsData = await getCars(state.pageGarage);
            let counter = START;
            carsData.items.forEach(async (car) => {
                if (car.id) {
                    await stopCarEngine(car.id.toString());
                }
                if (counter === carsData.items.length - 1) {
                    Object.entries(activationConfig).forEach((item) => {
                        changeElementState(...item);
                    });
                    isActivePagination(Layers.garage);
                }
                counter += 1;
            });
        });
    });
}

export function addEventListenerRaceButton(): void {
    elementDomStorage.get('button-race')?.forEach((button) => {
        button.addEventListener('click', async () => {
            if (!button.classList.contains('inactive')) {
                button.classList.add('inactive');
                const cars = await getCars(state.pageGarage);
                state.isRace = true;
                Object.entries(deactivationConfig).forEach((item) => {
                    changeElementState(...item);
                });
                clearInputValue('text-create');
                clearInputValue('text-update');
                const promises: Promise<unknown>[] = [];
                cars.items.forEach((car) => {
                    if (car.id) {
                        const id = car.id.toString();
                        const promise = new Promise((resolve) => {
                            resolve(startDrivingCar(id));
                        });
                        promises.push(promise);
                    }
                });
                Promise.all(promises);
            }
        });
    });
}
