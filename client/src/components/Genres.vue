<template>
<div style="margin: 10px 10px 0px 10px" class="row d-flex justify-content-center">
    <div v-for="genre in genrelist" :key="genre.id">
        <h5> <span style="margin-left: 10px" class="badge badge-secondary">{{genre.name}}</span> </h5>
    </div>
</div>
</template>

<script>
export default {
    name: 'Genres',
    props: ['genrelist'],
}

</script>