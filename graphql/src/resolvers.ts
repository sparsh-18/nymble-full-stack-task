import { genres } from "./db"
import { getMovies, getMoviesByID } from "./controller"

const resolvers = {
    Query: {
        movies: (parent: any, args: { search?: string }, context: any) => getMovies(args.search),
        movie: (parent: any, args: { id?: Number }, context: any) => getMoviesByID(args.id),
    },
    Movie: {
        genres(movie: any, args: any, context: any) {
            return genres.filter( (genre) => movie.genre_ids.includes(genre.id))   
        }
    },
    Mutation: {
        async addRating(parent: any, args: { id: string ; rating: string | undefined; }, context: any) {
            
            let update = await getMoviesByID(parseInt(args.id));
            if(update!=undefined && args.rating != undefined && parseInt(args.rating) >=0 && parseInt(args.rating) <=5 ){
                update.vote_count;
                update.vote_average = +((update.vote_average * update.vote_count + parseInt(args.rating)) / (update.vote_count+1)).toFixed(1);
                update.vote_count++;
            }
            return update;
        }
    }
}

export default resolvers