<template>
  <div>
    <Header />
    <div style="margin-top: 5%; margin-bottom: 3%" class="container">
      <h1>Add Rating: </h1>
    </div>
    <ApolloMutation
      :mutation="require('../graphql/mutation.gql')"
      :variables="{id, rating}"
      @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        <form v-on:submit.prevent="mutate()">
          <input type="text" v-model="rating" placeholder="1-5" /> <br><br>
          <button class="btn btn-primary" :disabled="loading" @click="mutate()">Submit</button>
        </form>
        
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Rating",
  data() {
    return {
      rating: '',
      title: ''
    };
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    onDone() {
      alert("done");
      // window.location.href = "/"
      this.$router.push({name: 'Home'})
    },

  },
  components: {
    Header,
    Footer
  }
};
</script>