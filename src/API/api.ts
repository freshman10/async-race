import { garage } from '../constants/constants';
import { CarsResponse } from '../constants/types';

export async function getCars(page: number, limit = 7): Promise<CarsResponse> {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
    };
}

export default getCars;
