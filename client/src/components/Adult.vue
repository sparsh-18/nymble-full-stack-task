<template>
    <h3>Content Rating:  
        <span v-if="movierating" class="badge badge-danger">Adult</span>
        <span v-else class="badge badge-success">U/A</span>
    </h3>
</template>

<script>
export default {
    name: 'Adult',
    props: ["movierating"]
}
</script>