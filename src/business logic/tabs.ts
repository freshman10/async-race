import { state } from '../state/state';
import { elementDomStorage, switchLayers } from './utils';

function disableButton(target: string, callback: EventListenerOrEventListenerObject): void {
    elementDomStorage.get(target)?.forEach((button) => {
        button.removeEventListener('click', callback, false);
        button.classList.add('inactive');
    });
}

function activateButton(target: string, callback: EventListenerOrEventListenerObject): void {
    elementDomStorage.get(target)?.forEach((button) => {
        button.addEventListener('click', callback);
        button.classList.remove('inactive');
    });
}

function tabsHandler(): void {
    if (state.activeLayer === 'garage') {
        activateButton('garage-button', tabsHandler);
        disableButton('winners-button', tabsHandler);
        state.activeLayer = 'winners';
    } else {
        disableButton('garage-button', tabsHandler);
        activateButton('winners-button', tabsHandler);
        state.activeLayer = 'garage';
    }
    switchLayers();
}

function listenTabs(): void {
    elementDomStorage.get('winners-button')?.forEach((button) => {
        button.addEventListener('click', tabsHandler);
    });
}

export default listenTabs;
