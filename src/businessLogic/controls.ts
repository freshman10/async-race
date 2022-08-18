import {
    addEventListenerGenerateCars,
    addEventListenerRaceButton,
    addEventListenerResetButton,
    addNewCarButtonListener,
    addUpdateButtonListener,
    isEmptyInputListener,
} from './crud-box';
import {
    addEventListenerPaginationButtonGarage,
    addEventListenerRemoveButton,
    addEventListenerSelectButton,
    addEventListenerStartEngine,
    addEventListenerStopEngine,
} from './garage';
import listenTabs from './tabs';
import { addEventListenerPaginationButtonWinners, addEventListenerSort } from './winners';

export function controlsGarage(): void {
    listenTabs();
    addNewCarButtonListener();
    isEmptyInputListener('text-create');
    addEventListenerSelectButton();
    addUpdateButtonListener();
    addEventListenerRemoveButton();
    addEventListenerGenerateCars();
    addEventListenerPaginationButtonGarage();
    addEventListenerStartEngine();
    addEventListenerStopEngine();
    addEventListenerResetButton();
    addEventListenerRaceButton();
}

export function controlsWinners(): void {
    addEventListenerSort();
    addEventListenerPaginationButtonWinners();
}

export function addControls(): void {
    controlsGarage();
    controlsWinners();
}

export default addControls;
