const API_KEY = '34960396-ee79eba7e6dca12e9fa7bf6c6';
const baseURL = 'https://pixabay.com/api/';

export const fetchMovies = (searchQuery, currentPage) => {
    return fetch(
        `${baseURL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(
            new Error(`Word ${this.state.searchQuery} is not exist`)
        )
    })
}