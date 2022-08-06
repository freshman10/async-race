import getCars, { getWinners } from './API/api';
import addControls from './business logic/controls';
import './global.css';
import renderPage from './render/renderPage';
import { state } from './state/state';

async function startApplication(): Promise<void> {
    const cars = getCars(state.pageGarage);
    const winners = await getWinners(state.pageWinners, state.sort, state.order);
    await renderPage(cars, winners);
    addControls();
}

startApplication();
