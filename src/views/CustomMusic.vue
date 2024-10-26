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
                <!-- custom music section start -->
                <div class="row px-4 layout_padding">
                    <div class="title">
                        <Card title="Get your own custom music for your project"/>
                        <p style="justify-content: center; width: 50%; margin: 0 auto; font-size: 20px; font-family: Montserrat-Light;">Stop using lifeless library tracks, get instead your own personalized original music.</p>
                    </div>
                    <div class="img_container">
                        <img src="../assets/images/Services.png">
                    </div>
                </div>
                <div class="contact_btn">
                    <router-link :to="{ name: 'contact' }">
                        Ask for a quote
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <Footer />

</template>

<style scoped>
#background {
    background-image: url(../assets/images/Bg/rouge.png);
    height: auto;
}

.container_brightness {
    height: 1200px;
    backdrop-filter: brightness(45%);
}

table {
    border-collapse: collapse;
    background-color: rgba(255, 255, 255, 0.6);
    width: 70%;
    margin: 0 auto;
    margin-top: 50px;
}

td {
    border: 2px solid #ff9f01cc;
    padding: 20px;
    text-align: center;
    color: black;
}

h2 {
    color: black;
}

.title {
    margin: 0 auto;
    text-align: center;
}

.img_container {
    padding: 20px;
    height: fit-content;
    display: flex;
    margin: 0 auto; 
    width: fit-content;
    border-radius: 15px;
}

img {
    width: 800px;
    margin: 0 auto;
}

.layout_padding {
    padding-bottom: 30px;
}
</style>