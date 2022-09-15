import { axios } from '../libs/axios';
import { Color } from '../types/colors.types';

interface ColorUpdateParams {
    id: string;
    data: Partial<Color>;
}

export async function getColor({hex = ''}: Color) {
    const response = await axios.get('/id', {
        params: { hex },
    });
    return response.data;
}
