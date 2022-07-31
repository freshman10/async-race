import { garage } from '../constants/constants';
import { Car, CarsResponse } from '../constants/types';

export async function getCars(page: number, limit = 7): Promise<CarsResponse> {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
    };
}

export async function getCar(id: string): Promise<Car> {
    const response = await fetch(`${garage}/${id}`);
    return response.json();
}

export async function createCar(data: Car) {
    return (
        await fetch(garage, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
}

export async function updateCar(id: string, carData: Car) {
    return (
        await fetch(`${garage}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(carData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
}

export async function deleteCar(id: string) {
    console.log(id);
    return (
        await fetch(`${garage}/${id}`, {
            method: 'DELETE',
        })
    ).json();
}

export default getCars;
