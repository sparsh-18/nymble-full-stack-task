<template>
  <div class="home">
    <Header />
    <homepage />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import homepage from '@/components/homepage.vue'; // @ is an alias to /src
import Homepage from '../components/homepage.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default Vue.extend({
  name: 'Home',
  components: {    
    Homepage,
    Header,
    Footer
  },
});
</script>
