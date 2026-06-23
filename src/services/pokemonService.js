import axios from 'axios';

const BASE_URL = import.meta.env.VITE_MEDIA_URL || 'http://localhost:8000/media';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPokemons = async () => {
    const response = await apiClient.get('/pokemons/');
    return response.data;
}