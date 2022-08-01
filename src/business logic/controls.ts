import {
    addEventListenerGenerateCars,
    addNewCarButtonListener,
    addUpdateButtonListener,
    isEmptyInputListener,
} from './crud-box';
import { addEventListenerRemoveButton, addEventListenerSelectButton } from './garage';
import listenTabs from './tabs';

export function addControls(): void {
    listenTabs();
    addNewCarButtonListener();
    isEmptyInputListener('text-create');
    addEventListenerSelectButton();
    addUpdateButtonListener();
    addEventListenerRemoveButton();
    addEventListenerGenerateCars();
}

export default addControls;
