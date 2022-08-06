import { createElement } from '../business logic/utils';
import { MILLISECONDS_IN_ONE_SECOND } from '../constants/constants';

export function renderWinnerFrame(name: string, time: number): void {
    const container = createElement({ type: 'div', parentElement: document.body, classes: ['winner-label-container'] });
    createElement({
        type: 'p',
        parentElement: container,
        classes: ['winner-label'],
        text: `${name} wins with result ${time / MILLISECONDS_IN_ONE_SECOND} seconds!`,
    });
}

export default renderWinnerFrame;
