import { createElement } from '../businessLogic/utils';
import { MILLISECONDS_IN_ONE_SECOND } from '../constants/constants';

export default function renderWinnerFrame(name: string, time: number): void {
    const container = createElement({ type: 'div', parentElement: document.body, classes: ['winner-label-container'] });
    createElement({
        type: 'p',
        parentElement: container,
        classes: ['winner-label'],
        text: `${name} wins with result ${time / MILLISECONDS_IN_ONE_SECOND} seconds!`,
    });
}
