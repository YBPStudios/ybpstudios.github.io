<script setup>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="container-fluid p-0" id="custom_music">
        <div class="container-fluid p-0" id="background">
            <div class="container_brightness">
                <!-- Menu -->
                <Header />
                <!-- about section start -->
                <div class="row px-4 layout_padding">
                    <div class="title">
                        <Card title="About Us"
                            message="Hey, we're two crazy young french composers who want to reach success !" />
                    </div>
                    <div style="text-align: center;" class="container_brightness">
                        <div class="background_black"
                            style="margin: 0 auto; width: fit-content; border: 2px solid #ff9f01cc; padding: 50px;">
                            <h1>What are you acquiring ?</h1>
                            <p>
                                A unique professional top quality Original music track certified "made by human"
                            </p>
                            <p>
                                - Customized on your special requests -
                            </p>
                            <p>
                                - Produced by Experts Composers at YBP Studios in Paris -
                            </p>
                            <p>
                                - whom will be happy to help for any of your projects -
                            </p>
                        </div>
                    </div>
                </div>
                <!-- about section end -->
            </div>
        </div>
    </div>

    <Footer />

</template>

<style scoped>
#background {
    background-image: url(../assets/images/Cinematic_Montage-min.png);
}

.container-brightness {
    height: 1200px;
}

.background_black {
    background-color: rgba(0, 0, 0, 0.7);
}

h1 {
    color: white;
}

.title {
    margin-left: 100px;
    padding-bottom: 100px;
}
</style>