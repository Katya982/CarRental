import axios from 'axios';

const BASE_URL = 'https://65d7c1b127d9a3bc1d7bc0a4.mockapi.io/adverts'

export const fetchData = async (page) => {
    const params = new URLSearchParams({        
        per_page: 12,
        page: page
    });
    try {
        const response = await axios.get(`${BASE_URL}?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
