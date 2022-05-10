import axios from 'axios'

export async function http(request: string): Promise<any> {
    const response = await axios(`https://api.mercadolibre.com/${request}`);
    return response.data;
}