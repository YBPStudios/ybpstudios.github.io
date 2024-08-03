<script setup>
import Card from './Card.vue';
defineProps({
    title: String,
    message: String
})
</script>

<template>
    <div class="col-md-6 p-2" id="carousel">
        <Card :title="title" :message="message" />
    </div>
</template>

<style scoped>
#carousel {
    position: relative;
    left: 270px;
}
</style>
