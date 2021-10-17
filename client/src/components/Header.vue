<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand">Movie Browser</a>
  </nav>
</template>

<style scoped>
.navbar-brand {
    margin-left: 45%;
}

@media only screen and (max-width: 600px) {
  .navbar-brand {
    margin-left: 0;
}
}
</style>

<script>
export default {
  name: "Header",
};
</script>