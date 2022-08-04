import renderWinners from '../render/renderWinners';
import { controlsWinners } from './controls';
import { eraseElement } from './garage';
import { clearDOMStorage } from './utils';

export function updateWinnersTable(): void {
    eraseElement('winners');
    clearDOMStorage('winners');
    renderWinners();
    controlsWinners();
}

export default updateWinnersTable;
