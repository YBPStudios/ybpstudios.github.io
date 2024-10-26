<script setup>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';

// Gestion des partners
const getImgUrl = (imageNameWithExtension) => new URL(`../assets/images/Logos_ref/${imageNameWithExtension}`, import.meta.url).href;
const partners_1 = ([
    { website: 'https://www.archimusebordeaux.com/', image: 'archimuse.png' },
    { website: 'https://www.ecv.fr/', image: 'ecv.jpg' },
    { website: 'https://www.coursflorent.fr/', image: 'florent.jpg' },
    { website: 'https://www.arte.tv/fr/', image: 'arte.png' },
    { website: 'https://www.ecole-pivaut.fr/?gclid=Cj0KCQjwqKuKBhCxARIsACf4XuHWFaccKvyaEg9-iOZHvBVCNviSP_weepe4_KiSAz8voumM9E17cucaAhpIEALw_wcB', image: 'pivaut.jpg' }
])
const partners_2 = ([
    { website: 'https://clermont-filmfest.org/en/global/home/', image: 'clermont.png' },
    { website: 'https://www.annecy.org/', image: 'festivalannecy.jpg' },
    { website: 'https://www.gobelins.fr/', image: 'gobelins.jpg' },
    { website: 'https://www.piktura.fr/', image: 'piktura.png' },
    { website: 'https://www.soundtrackcologne.de/', image: 'stc.png' }
])

</script>

<template>
    <div class="container-fluid p-0" id="background">
        <div class="container-fluid p-0">
            <div class="container_brightness">
                <!-- Menu -->
                <Header />
                <!-- banner section start -->
                <div class="container-fluid px-0 layout_padding">
                    <h1 class="banner_title">The future<br>original music</h1>
                    <h2 class="banner_text">Unique Story,<br>Unique Music.</h2>
                </div>
                <!-- banner section end -->
            </div>
        </div>

        <div class="btn_container container_brightness" style="padding-top: 100px;">
            <div class="contact_btn">
                <router-link :to="{ name: 'contact' }">
                    Ask for a quote
                </router-link>
            </div>
        </div>

        <div class="card text-bg-dark bg-transparent container_brightness video_text">
            <div class="row g-0">
                <div class="col-12 col-md-6 p-0" style="margin: 0 auto;">
                    <div>
                        <h3 class="card-title">YBP Studios - Trailer</h3>
                    </div>
                    <iframe class="video-container w-100" loading="lazy"
                        src="https://www.youtube-nocookie.com/embed/GXXxHkQkqQk?vq=hd1080" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <hr>

        <div class="card text-bg-dark bg-transparent container_brightness video_text">
            <div class="row g-0">
                <div class="col-12 col-md-6">
                    <iframe class="video-container w-100" loading="lazy"
                        src="https://www.youtube-nocookie.com/embed/v4V3o8hRdg4" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

                <!-- Line break only on smartphones -->
                <div class="d-block d-md-none"></div>

                <div class="col-12 col-md-6">
                    <div class="card-body">
                        <h3 class="card-title">Showreel</h3>
                        <p class="card-text">Here is a showreel to present our work !<br>
                            We offer custom music on different types of projects.<br>
                            <br>
                            - Immerse people into your world -<br>
                            - Boost your influence with a sound identity for your brand -<br>
                            - Make your landscapes look magical -<br>
                            - Bring your characters to life -<br>
                            - Custom your music to fit your images -<br>
                            - Create your unique emotion -<br>
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <div class="card text-bg-dark bg-transparent container_brightness video_text">
            <div class="row g-0">
                <div class="col-12 col-md-6">
                    <div class="card-body">
                        <h3 class="card-title">Video Games</h3>
                        <p class="card-text">Presentation of some video games soundtracks that we've made for
                            animation
                            studients' projects from <a href="https://www.ecv.fr/lecole/lille/">ECV school</a> in
                            Lille, France.<br>
                            <br>
                            First, a trailer and soundtracks of "The Epopee of Hylas", video game made by François
                            Chapoule, Marie-Emilie Guilleman, Florian Soret and Edouard Stoppe in 2023.<br>
                            <br>
                            Then soundtracks from "Take a Shot" produced by François Chapoule, Léo Gammel, Thomas
                            Garrel, Pauline Grosdidier and Marie-Emilie Guilleman in 2022.<br>
                            <br>
                            And a project called "Hikari" made by Floran Soret, Félix Leroy, François Chapoule and
                            Lucas Flamein in 2021.<br>
                            <br>
                        </p>
                    </div>
                </div>

                <!-- Line break only on smartphones -->
                <div class="d-block d-md-none"></div>

                <div class="col-12 col-md-6">
                    <iframe class="video-container w-100" loading="lazy"
                        src="https://www.youtube-nocookie.com/embed/v11Orkj4Bik" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="btn_container container_brightness">
            <div class="contact_btn">
                <router-link :to="{ name: 'contact' }">
                    Ask for a quote
                </router-link>
            </div>
        </div>

        <hr>

        <div id="partnersContainer" class="layout_padding container_brightness">
            <h1 style="padding-left: 5%;">Our Partners</h1>
            <div class="col-10 mx-auto" style="padding-top: 30px;">

                <ul class="list-group list-group-horizontal">
                    <!-- Première ligne images calées à droite avec float-end -->
                    <li class="li_partner" v-for="partner in partners_1">
                        <div class="col-6 float-end p-3">
                            <a :href="partner.website" target="_blank"><img loading="lazy"
                                    :src="getImgUrl(partner.image)" class="image mx-auto d-block" alt=""></a>
                        </div>
                    </li>
                </ul>

                <ul class="list-group list-group-horizontal">
                    <!-- Deuxième ligne images calées à gauche avec float-start -->
                    <li class="li_partner" v-for="partner in partners_2">
                        <div class="col-6 float-start p-3">
                            <a :href="partner.website" target="_blank"><img loading="lazy"
                                    :src="getImgUrl(partner.image)" class="image mx-auto d-block" alt=""></a>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
#partnersContainer {
    padding-top: 100px;
    padding-bottom: 100px;
}

#background {
    background-image: url(../assets/images/banner-bg_resized.png);
    height: auto;
}

hr {
    height: 1px;
    background-color: white;
    opacity: 100%;
    width: 70%;
    margin: 0 auto;
}

.banner_title {
    /* background-color: rgba(0, 0, 0, 0.4); */
    padding: 30px;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: 50px;
    color: #ffffff;
    text-shadow: rgb(20, 20, 20);
    text-transform: uppercase;
    /* box-shadow: 0 8px 8px rgb(255, 159, 1, 0.2); */
    letter-spacing: 15px;
}

.banner_text {
    margin: 0 auto;
    font-size: 30px;
    font-variant: small-caps;
    font-family: Montserrat-Light;
    font-style: oblique;
    color: #ffffff;
    text-align: center;
    margin-bottom: 10px;
    padding-top: 80px;
    letter-spacing: 10px;
}

.banner_quotes {
    text-align: center;
}

.carouselCard {
    position: relative;
    left: 270px;
}

.read_bt {
    height: 150px;
}

.read_bt a {
    height: 47px;
    font-size: 16px;
    color: #141414;
    background-color: #ffffff;
    text-align: center;
    padding: 10px 0px;
    border-radius: 30px;
    font-weight: 400;
}

.read_bt a:hover {
    background-color: #2b2278;
    color: #ffffff;
}

.li_partner {
    width: 16%;
    margin: 0 auto;
}

.video-container {
    height: 450px;
}

.carousel-inner {
    padding-top: 100px;
}

.card-body {
    margin-left: 10%;
    margin-right: 20%;
    text-align: justify;
}

.card-title {
    margin: 0;
    padding-bottom: 20px;
    letter-spacing: 5px;
}

.card-text {
    margin: 0;
}

.btn_container {
    width: 100%;
    height: fit-content;
    padding-top: 50px;
    padding-bottom: 100px;
}

.video_text {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>