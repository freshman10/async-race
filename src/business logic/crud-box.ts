import { createCar, updateCar } from '../API/api';
import { elementDomStorage } from '../render/createHTMLelement';
import { updateGarage } from './garage';
import { generateRandomColor, generateRandomModel, getInputData } from './utils';

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
