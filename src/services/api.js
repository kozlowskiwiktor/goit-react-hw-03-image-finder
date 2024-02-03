import axios from "axios";

const API_KEY = '34960396-ee79eba7e6dca12e9fa7bf6c6';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchGalleryWithQuery = async (searchQuery, page = 1) => {
    const response = await axios.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data.hits
}

export default { fetchGalleryWithQuery }