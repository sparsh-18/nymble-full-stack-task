import { gql } from "apollo-server-core";

const typeDefs = gql`

    type Movie {
        id: Int!
        title: String!
        release_date: String!
        popularity: Float!
        overview: String!
        vote_average: Float!
        vote_count: Int!
        adult: Boolean!
        genre_ids: [Int!]!
        genres: [Genre!]!
    }

    type Genre {
        id: Int!
        name: String!
    }

    type Query {
        movies(search: String): [Movie!]!
        movie(id: Int): Movie!
    }

    type Mutation {
        addRating(id: String, rating: String): Movie!
    }

`

export default typeDefs