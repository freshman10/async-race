import { renderHeader } from '../components/render/header';
import { renderMain } from '../components/render/main';
import getData from './getData';
import { renderFooter } from './render/footer';
import { DataObject } from './types';

export function buildPage(): void {
    renderHeader();
    const data: DataObject[] = getData();
    renderMain(data);
    renderFooter();
}
