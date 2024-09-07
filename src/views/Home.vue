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
                    <h2 class="banner_text"
                        style="font-size: 35px; font-variant: small-caps; font-family: Montserrat-Light; padding-top: 80px; font-style: oblique;">
                        Triumph of quality over quantity</h2>
                    <!-- <p class="banner_text">“So long as the human spirit thrives on this
                        planet, music in some living
                        form
                        will accompany and sustain it.”<br><i>Aaron Copland</i></p>
                    <p class="banner_text">“I should be sorry if I only entertained them. I wish to make them
                        better.”<br><i>Georg Frideric Handel</i></p> -->
                </div>
                <!-- banner section end -->
            </div>
        </div>

        <div class="row" id="carouselContainer">
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner container_brightness" style="padding-top: 100px;">
                    <div class="carousel-item active p-4 mt-5">
                        <div class="carouselCard col-md-6 p-2">
                            <Card title="About Us" message="Hey, we're two crazy young french composers who want to reach
                            success !">
                                <router-link :to="{ name: 'about' }">
                                    Read More
                                </router-link>
                            </Card>
                        </div>
                    </div>
                    <div class="carousel-item p-4 mt-5">
                        <div class="carouselCard col-md-6 p-2">
                            <Card title="Custom your music" message="Get your own music for your project !">
                                <router-link :to="{ name: 'custom_music' }">
                                    Read More
                                </router-link>
                            </Card>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="card text-bg-dark bg-transparent layout_padding container_brightness">
            <div class="row g-0">
                <div class="col-6 py-2">
                    <iframe class="video-container w-100" loading="lazy"
                        src="https://www.youtube-nocookie.com/embed/xR2z1ABLe1U" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div class="col-6">
                    <div class="card-body">
                        <h3 class="card-title">Trailer</h3>
                        <p class="card-text">Presentation of different types of media we've worked on.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card text-bg-dark bg-transparent layout_padding container_brightness">
            <div class="row g-0">
                <div class="col-6">
                    <div class="card-body">
                        <h3 class="card-title">Video Games</h3>
                        <p class="card-text">Presentation of some video games soundtracks that we've made for
                            animation
                            studients' projects from <a href="https://www.ecv.fr/lecole/lille/">ECV school</a> in
                            Lille, France.<br>
                            <br>
                            First, a trailer and soundtracks of "The Epopee of Hylas", video game made by François
                            Chapoule, Marie-Emilie Guilleman, Florian Soret and Edouard Stoppe in 2023.<br>
                            <u>Synopsys :</u> <i>Hylas, a small humanoid feline, is tasked with repairing the
                                various
                                buildings on the islands ravaged by Hades, who has imprisoned the gods, preventing
                                their
                                intervention on Earth. Hylas will have the chance to prove himself by renovating the
                                dwellings and restoring contact with the gods.</i><br>
                            <br>
                            Then soundtracks from "Take a Shot" produced by François Chapoule, Léo Gammel, Thomas
                            Garrel, Pauline Grosdidier and Marie-Emilie Guilleman in 2022.<br>
                            <u>Synopsys :</u> <i>A YouTuber and his friend visit an abandoned abbey to make a video.
                                Soon, they realize that the place is not as deserted as it seems, and our hero finds
                                himself isolated, with only a camera as his weapon.</i><br>
                            <br>
                            And a project called "Hikari" made by Floran Soret, Félix Leroy, François Chapoule and
                            Lucas
                            Flamein in 2021.<br>
                            <u>Synopsys :</u> <i>Immersed in Japanese folklore during the Edo period, a young
                                villager must save his village from darkness by restoring the light in a sacred
                                temple held by the Shadow Oni.</i><br>
                        </p>
                    </div>
                </div>
                <div class="col-6 py-2">
                    <iframe class="video-container w-100" loading="lazy"
                        src="https://www.youtube-nocookie.com/embed/v11Orkj4Bik" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>

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
#background {
    background-image: url(../assets/images/banner-bg_resized.png);
    height: auto;
}

.banner_title {
    /* background-color: rgba(0, 0, 0, 0.4); */
    padding: 30px;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: 60px;
    color: #ffffff;
    text-shadow: rgb(20, 20, 20);
    text-transform: uppercase;
    /* box-shadow: 0 8px 8px rgb(255, 159, 1, 0.2); */
    letter-spacing: 15px;
}

.banner_text {
    margin: 0 auto;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 10px;
    padding-top: 30px;
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
</style>