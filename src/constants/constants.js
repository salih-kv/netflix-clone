export const baseURL = "https://api.themoviedb.org/3/";
export const API_KEY = "2e78fee6d38c0e41838889780a05b56d";
export const imageURL = "https://image.tmdb.org/t/p/original/";

export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28'`;
export const comedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
