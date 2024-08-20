<script setup>
import Header from '@/components/Header.vue';
import CarouselCard from '@/components/CarouselCard.vue';

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
    <div class="container-fluid p-0" id="home">
        <div class="container-fluid p-0" id="background">
            <div class="container_brightness">
                <!-- Menu -->
                <Header />
                <!-- banner section start -->
                <div class="container-fluid px-0 layout_padding">
                    <h1 class="banner_title">The future<br>original music</h1>
                    <p class="banner_text">“So long as the human spirit thrives on this
                        planet, music in some living
                        form
                        will accompany and sustain it.”<br><i>Aaron Copland</i></p>
                    <p class="banner_text">“I should be sorry if I only entertained them. I wish to make them
                        better.”<br><i>Georg Frideric Handel</i></p>
                    <div class="read_bt row align-items-end pb-2">
                        <a class="nav-link col-2 mx-auto" href="custom_music.html">Custom Music</a>
                    </div>
                </div>
                <!-- banner section end -->
            </div>
        </div>

        <div class="row p-4 mt-5" id="carouselContainer">
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <CarouselCard title="About Us" message="Hey, we're two crazy young french composers who want to reach
                                        success !" />
                    </div>
                    <div class="carousel-item">
                        <CarouselCard title="Custom your music" message="Get your own music for your project !" />
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
        <div class="card text-bg-dark bg-transparent mb-3 layout_padding">
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
                        <p class="card-text">Presentation of our work.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card text-bg-dark bg-transparent mb-3 layout_padding">
            <div class="row g-0">
                <div class="col-6">
                    <div class="card-body">
                        <h3 class="card-title">Documentary</h3>
                        <p class="card-text">Unique story, unique music.</p>
                    </div>
                </div>
                <div class="col-6 py-2">
                    <iframe class="video-container w-100" loading="lazy"
                        src="https://www.youtube-nocookie.com/embed/xR2z1ABLe1U" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div id="partnersContainer" class="layout_padding">
            <h1 style="padding-left: 5%;">Our Partners</h1>
            <div class="col-10 mx-auto layout_padding">
                <ul class="list-group list-group-horizontal">
                    <!-- Première ligne images calées à droite avec float-end -->
                    <li class="image_partner" v-for="partner in partners_1">
                        <a :href="partner.message" target="_blank"><img loading="lazy" :src="getImgUrl(partner.image)"
                                class="col-6 float-end" alt=""></a>
                    </li>
                </ul>
                <ul class="list-group list-group-horizontal">
                    <!-- Deuxième ligne images calées à gauche avec float-start -->
                    <li class="image_partner" v-for="partner in partners_2">
                        <a :href="partner.message" target="_blank"><img loading="lazy" :src="getImgUrl(partner.image)"
                                class="col-6 float-start" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
#home {
    background-color: black;
}

#background {
    background-image: url(../assets/images/banner-bg.png);
    background-size: cover;
}

.banner_title {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: 50px;
    color: #ffffff;
    text-transform: uppercase;
    box-shadow: 0 8px 8px rgb(255, 159, 1, 0.2);
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

.image_partner {
    width: 20%;
}

.video-container {
    height: 450px;
}
</style>