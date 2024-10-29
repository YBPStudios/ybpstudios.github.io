<script setup>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div id="background">
        <div class="p-0 container_brightness">
            <!-- Menu -->
            <Header />
            <!-- about section start -->
            <div class="row mb-0">
                <div class="title">
                    <Card title="About us" />
                    <p
                        style="justify-content: center; width: 50%; margin: 0 auto; font-size: 20px; font-family: Montserrat-Light;">
                        YBP is a recently launched music production studio based in Paris founded by two
                        profesionnal composers. We promote original made-by-human creations and we take care
                        producing refined soundtracks to help creators reach high quality projects.</p>
                </div>

                <div class="bg-transparent layout_padding">

                    <div class="col-12 col-md-6" style="margin: 0 auto;">
                        <img src="../assets/images/FAQ 1.png">
                    </div>

                    <div class="col-12 col-md-6" style="margin: 0 auto;">
                        <img src="../assets/images/FAQ 2.png">
                    </div>
                </div>
                <div class="contact_btn" style="padding-bottom: 100px;">
                    <div class="contact_btn">
                        <router-link :to="{ name: 'contact' }">
                            Ask for a quote
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />

</template>

<style scoped>
#background {
    background-image: url(../assets/images/Bg/Bleu1.png);
    height: auto;
}

.container_brightness {
    height: auto;
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