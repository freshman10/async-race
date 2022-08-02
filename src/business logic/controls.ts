import {
    addEventListenerGenerateCars,
    addEventListenerRaceButton,
    addEventListenerResetButton,
    addNewCarButtonListener,
    addUpdateButtonListener,
    isEmptyInputListener,
} from './crud-box';
import {
    addEventListenerNextButton,
    addEventListenerPREVButton,
    addEventListenerRemoveButton,
    addEventListenerSelectButton,
    addEventListenerStartEngine,
    addEventListenerStopEngine,
} from './garage';
import listenTabs from './tabs';

export function addControls(): void {
    listenTabs();
    addNewCarButtonListener();
    isEmptyInputListener('text-create');
    addEventListenerSelectButton();
    addUpdateButtonListener();
    addEventListenerRemoveButton();
    addEventListenerGenerateCars();
    addEventListenerNextButton();
    addEventListenerPREVButton();
    addEventListenerStartEngine();
    addEventListenerStopEngine();
    addEventListenerResetButton();
    addEventListenerRaceButton();
}

export default addControls;
