<script setup>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
</script>

<template>
    <div class="container-fluid p-0" id="custom_music">
        <div class="container-fluid p-0" id="background">
            <div class="container_brightness">
                <!-- Menu -->
                <Header />
                <!-- custom music section start -->
                <div class="row px-4 layout_padding">
                    <Card title="Personnalize your music" message="Get your own music for your project !" />
                </div>
                <!-- custom music section end -->
            </div>
        </div>
    </div>
</template>

<style scoped>
#background {
    background-image: url(../assets/images/bg2.jpg);
    background-size: cover;
}
</style>