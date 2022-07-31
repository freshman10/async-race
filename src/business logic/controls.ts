import { addNewCarButtonListener, isEmptyInputListener } from './crud-box';
import listenTabs from './tabs';

export function addControls(): void {
    listenTabs();
    addNewCarButtonListener();
    isEmptyInputListener('text-create');
}

export default addControls;
