import { addNewCarButtonListener, addUpdateButtonListener, isEmptyInputListener } from './crud-box';
import { addEventListenerSelectButton } from './garage';
import listenTabs from './tabs';

export function addControls(): void {
    listenTabs();
    addNewCarButtonListener();
    isEmptyInputListener('text-create');
    addEventListenerSelectButton();
    addUpdateButtonListener();
}

export default addControls;
