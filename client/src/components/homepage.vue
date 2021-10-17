<template>
  <div class="container-fluid">
    <ApolloQuery
      :query="(gql = require('../graphql/movies.gql'))"
      :variables="{ search }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="data">
          <form style="margin: 5% 0 0 15%" class="form-inline">
            <input
              class="form-control"
              v-model="search"
              style="width: 80%;"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="button">
              Search
            </button>
          </form>
          <div class="row">
            <div
              class="col-md-4"
              style="padding-top: 2%"
              v-for="movie in data.movies"
              :key="movie.id"
            >
              <MovieCard :movie="movie" />
            </div>
          </div>
        </div>
        <div v-else-if="error" class="error apollo">An error occurred</div>
        <div v-else-if="loading" class="error apollo">An error occurred</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>

import MovieCard from "./MovieCard.vue";

export default {
  name: "homepage",

  data() {
    return {
      search: this.search == undefined ? "" : this.search,
    };
  },

  components: {
    MovieCard,
  },

};
</script>