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
