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
                    <Card title="About Us"
                        message="Hey, we're two crazy young french composers who want to reach success !" />
                    <div style="text-align: center;" class="container_brightness">
                        <div class="background_black" style="margin: 0 auto; width: fit-content; border: 2px solid #ff9f01; padding: 50px;">
                            <h1>What are you acquiring ?</h1>
                            <p>
                                A unique professional top quality Original music track certified "made by human"
                            </p>
                            <p>
                                Customized on your special requests...
                            </p>
                            <p>
                                ...Produced by Experts Composers at YBP Studios in Paris...
                            </p>
                            <p>
                                ...whom will be happy to help for any of your projects.
                            </p>
                        </div>
                    </div>
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

.background_black {
    background-color: rgba(0, 0, 0, 0.8);
}

h1 {
    color: white;
}
</style>