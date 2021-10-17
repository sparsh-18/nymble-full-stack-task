<template>
  <div>
    <router-link
      class="btn btn-success"
      :to="{ path: '/movie/' + movieid + '/rating' }"
      >Add Rating</router-link
    >
  </div>
</template>

<script>
export default {
  name: "AddRating",
  props: ["movieid"],
};
</script>