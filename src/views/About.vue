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
                        <Card title="About us" />
                        <p
                            style="justify-content: center; width: 50%; margin: 0 auto; font-size: 20px; font-family: Montserrat-Light;">
                            YBP is a recently launched music production studio based in Paris founded by two
                            profesionnal composers. We promote original made-by-human creations and we take care
                            producing refined soundtracks to help creators reach high quality projects.</p>
                    </div>
                    <div class="img_container">
                        <tr>
                            <td>
                                <img src="../assets/images/About_1.png">
                            </td>
                            <td>
                                <img src="../assets/images/About_2.png">
                            </td>
                        </tr>
                    </div>
                </div>
                <div class="btn_container">
                    <div class="contact_btn">
                        <router-link :to="{ name: 'contact' }">
                            Ask for a quote
                        </router-link>
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
    background-image: url(../assets/images/Bg/Bleu.png);
}

.layout_padding {
    padding-bottom: 0;
}

.container_brightness {
    height: 1200px;
    backdrop-filter: brightness(35%);
}

.background_black {
    background-color: rgba(0, 0, 0, 0.7);
}

h1 {
    color: white;
}

.title {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 30px;
}

.btn_container {
    width: 100%;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.img_container {
    width: 100%;
    overflow: hidden;
    text-align: center;
}
</style>