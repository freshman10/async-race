import { createElement } from '../business logic/utils';

export function renderWinnerFrame(name: string, time: number): void {
    const container = createElement('div', document.body, ['winner-label-container']);
    createElement('p', container, ['winner-label'], `${name} wins with result ${time / 1000} seconds!`);
}

export default renderWinnerFrame;
