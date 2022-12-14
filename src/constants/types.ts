export interface Car {
    name: string;
    color: string;
    id?: number;
}

export interface CarsResponse {
    items: Car[];
    count: string | null;
}

export interface Speed {
    velocity: number;
    distance: number;
}

export interface Winner {
    id: number;
    wins: number;
    time: number;
    car?: Car;
}
export interface WinnersResponse {
    items: Winner[];
    count: string;
}

export interface CreateElementInterface {
    type: string;
    parentElement: HTMLElement;
    classes?: string[];
    text?: string;
    attributes?: [string, string][];
    tag?: number;
}

export enum sortingTypesEnum {
    'DESC',
    'ASC',
}

export enum CarStatusEnum {
    'started',
    'stopped',
    'drive',
}

export enum SortingColumn {
    'id',
    'wins',
    'time',
}

export enum Layers {
    garage,
    winners,
}
