import { movies } from "./db";
import { Movie, Genre } from "./types";

export function getMovies(search?: string): any {
    // TODO
    if(search != null && search.length != 0) {
        return movies.filter((e) => e.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    } else {
        return movies
    }
}

export function getMoviesByID(id: Number | undefined) {
    return movies.find((movie) => movie.id === id)
}