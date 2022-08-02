import { engine, garage } from '../constants/constants';
import { Car, CarsResponse, Speed } from '../constants/types';

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

export async function createCar(data: Car): Promise<Car> {
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

export async function updateCar(id: string, carData: Car): Promise<Car> {
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

export async function deleteCar(id: string): Promise<void> {
    await fetch(`${garage}/${id}`, {
        method: 'DELETE',
    });
}

export async function startEngine(id: string): Promise<Speed> {
    return (
        await fetch(`${engine}?id=${id}&status=started`, {
            method: 'PATCH',
        })
    ).json();
}

export async function stopEngine(id: string): Promise<Speed> {
    return (
        await fetch(`${engine}?id=${id}&status=stopped`, {
            method: 'PATCH',
        })
    ).json();
}

export async function driveCar(id: string): Promise<{ success: boolean }> {
    const data = await fetch(`${engine}?id=${id}&status=drive`, {
        method: 'PATCH',
    }).catch();
    return data.status === 200 ? { ...(await data.json()) } : { success: false };
}

export default getCars;
