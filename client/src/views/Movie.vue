<template>
  <div>
    <Header />
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">{{ movie.title }}</h1>
        <p>Released on: {{ movie.release_date }}</p>
        <Adult :movierating="movie.adult" />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <Genres :genrelist="movie.genres" />
          <h2 style="margin-top: 1%">Popularity:</h2>
          <h4>{{ movie.popularity }}</h4>
          <h2>Vote Count:</h2>
          <h4>{{ movie.vote_count }}</h4>
          <h2>Vote Average:</h2>
          <h4>{{ movie.vote_average }}</h4>

          <router-link
            class="btn btn-success"
            :to="{ path: '/movie/' + movie.id + '/rating' }"
            >Add Rating</router-link
          >
        </div>

        <div class="col-md-6">
          <h1>Overview:</h1>
          <h3 style="text-align: justify">{{ movie.overview }}</h3>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Genres from "../components/Genres.vue";
import Adult from "../components/Adult.vue";
import AddRating from "../components/AddRating.vue";

export default Vue.extend({
  name: "Movie",

  props: ["movie"],

  components: {
    Header,
    Footer,
    Genres,
    Adult,
    AddRating,
  },
});
</script>
