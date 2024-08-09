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
                <!-- about section start -->
                <div class="row px-4 layout_padding">
                    <Card title="About Us" message="Hey, we're two crazy young french composers who want to reach success !" />
                </div>
                <!-- about section end -->
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