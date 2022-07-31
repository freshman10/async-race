import { STRING, WRONG_DATA } from '../constants/constants';

export const elementDomStorage = new Map<string, HTMLElement[]>();
export const tagsStorage = new Map<string, string[]>();

function saveToMap<T, K>(map: Map<T, K[]>, key: T, value: K): void {
    if (map.has(key)) {
        map.get(key)?.push(value);
    } else {
        map.set(key, [value]);
    }
}

export function clearDOMStorage(tag: string): void {
    new Set(tagsStorage.get(tag))?.forEach((cls) => {
        elementDomStorage.delete(cls);
    });
}

export function addToDOMStorage(element: HTMLElement, tag?: string): void {
    if (element && element.classList) {
        element.classList.forEach((cls) => {
            saveToMap(elementDomStorage, cls, element);
            if (tag) {
                saveToMap(tagsStorage, tag, cls);
            }
        });
    }
}

export function createElement(
    type: string,
    parentElement: HTMLElement,
    classes?: string[],
    text?: string,
    attributes?: [string, string][],
    tag?: string
): HTMLElement {
    if (type && parentElement && typeof type === STRING && parentElement instanceof HTMLElement) {
        const element: HTMLElement = document.createElement(type);
        if (classes) {
            element.classList.add(...classes);
        }
        element.textContent = text || '';
        if (attributes) {
            for (let i = 0; i < attributes.length; i += 1) {
                element.setAttribute(...attributes[i]);
            }
        }
        parentElement.appendChild(element);
        addToDOMStorage(element, tag);
        return element;
    }
    throw new Error(WRONG_DATA);
}
