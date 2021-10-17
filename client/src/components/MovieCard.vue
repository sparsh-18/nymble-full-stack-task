<template>
    <div class="card">
      <h5 class="card-header">{{movie.title}}</h5>
      <Genres :genrelist="movie.genres" />
      <div class="card-body">
        <h5 class="card-title">Released on: {{movie.release_date}}</h5>
        <p class="card-text">
          Popularity score: {{movie.popularity}}
        </p>
        <router-link class="btn btn-primary" :to="{name: 'Movie', params: {movie}}">Know More</router-link>
      </div>
    </div>
</template>

<script>

import Genres from './Genres.vue'

export default {
  name: "MovieCard",
  components: {
      Genres
  },
  props: ['movie']
};
</script>