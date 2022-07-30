import addControls from './business logic/controls';
import './global.css';
import renderPage from './render/renderPage';

function startApplication() {
    renderPage();
    addControls();
}

startApplication();
