import { getSortOrder } from '../businessLogic/utils';
import { engine, garage, MAX_CARS, MAX_WINNERS, winners } from '../constants/constants';
import { Car, CarsResponse, SortingColumn, sortingTypesEnum, Speed, Winner, WinnersResponse } from '../constants/types';
import state from '../state/state';

export async function getCars(page: number, limit = MAX_CARS): Promise<CarsResponse> {
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

export async function getWinners(
    page: number,
    sort: SortingColumn,
    order: sortingTypesEnum,
    limit = MAX_WINNERS
): Promise<WinnersResponse> {
    const response = await fetch(
        `${winners}?_page=${page}&_limit=${limit}${getSortOrder(SortingColumn[sort], sortingTypesEnum[order])}`
    );
    const items = await response.json();
    return {
        items: await Promise.all(
            items.map(async (winner: Winner) => ({ ...winner, car: await getCar(winner.id.toString()) }))
        ),
        count: response.headers.get('X-Total-Count') as string,
    };
}

export async function getWinner(id: string): Promise<Winner> {
    return (await fetch(`${winners}/${id}`)).json();
}

export async function createWinner(body: Winner): Promise<Winner> {
    return (
        await fetch(`${winners}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
}

export async function deleteWinner(id: string): Promise<Winner> {
    return (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();
}

export async function updateWinner(id: string, body: Winner): Promise<Winner> {
    return (
        await fetch(`${winners}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();
}

export async function saveWinner(id: string, time: number) {
    const data = await getWinners(state.pageWinners, state.sort, state.order);
    if (data.items.some((el) => el.id === Number(id))) {
        const winner = await getWinner(id);
        winner.wins += 1;
        winner.time = winner.time < time ? winner.time : time;
        await updateWinner(id, winner);
    } else {
        await createWinner({ id: Number(id), wins: 1, time });
    }
}
export default getCars;
