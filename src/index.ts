import getCars from './API/api';
import addControls from './business logic/controls';
import { state } from './constants/constants';
import './global.css';
import renderPage from './render/renderPage';

async function startApplication(): Promise<void> {
    const cars = getCars(state.page);
    await renderPage(cars);
    addControls();
}

startApplication();
