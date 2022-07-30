import getCars from './API/api';
import addControls from './business logic/controls';
import { state } from './constants/constants';
import './global.css';
import renderPage from './render/renderPage';

function startApplication() {
    const cars = getCars(state.page);
    renderPage(cars);
    addControls();
}

startApplication();
