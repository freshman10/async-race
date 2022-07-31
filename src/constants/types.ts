export interface Car {
    name: string;
    color: string;
    id?: number;
}

export interface CarsResponse {
    items: Car[];
    count: string | null;
}
