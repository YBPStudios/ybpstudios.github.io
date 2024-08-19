<script setup>
import Header from '@/components/Header.vue';
import CarouselCard from '@/components/CarouselCard.vue';
// import imageUrl from '@/assets/images/Logos_ref/archimuse.png'

// import { ref } from 'vue'
// const parentMessage = ref('Parent')
// const items = ref([
//     { message: 'https://www.archimusebordeaux.com/', image: "imageUrl" }, 
//     { message: 'https://www.ecv.fr/', image:'../assets/images/Logos_ref/ecv.jpg' }])

    // { website: 'https://www.archimusebordeaux.com/', image:'../assets/images/Logos_ref/archimuse.png' }, 
    // { website: 'https://www.ecv.fr/', image:'../assets/images/Logos_ref/ecv.jpg' },
    // { website: 'https://www.coursflorent.fr/', image:'../assets/images/Logos_ref/florent.jpg' },
    // { website: 'https://www.arte.tv/fr/', image:'../assets/images/Logos_ref/arte.png' },
    // { website: 'https://www.ecole-pivaut.fr/?gclid=Cj0KCQjwqKuKBhCxARIsACf4XuHWFaccKvyaEg9-iOZHvBVCNviSP_weepe4_KiSAz8voumM9E17cucaAhpIEALw_wcB', image:'../assets/images/Logos_ref/pivaut.jpg' }
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
                    <p class="banner_text" style="padding-top: 30px;">“So long as the human spirit thrives on this
                        planet, music in some living
                        form
                        will accompany and sustain it.” Aaron Copland</p>
                    <p class="banner_text">“I should be sorry if I only entertained them. I wish to make them
                        better.”
                        Georg
                        Frideric Handel</p>
                    <div class="read_bt row align-items-end pb-2">
                        <a class="nav-link col-2 mx-auto" href="custom_music.html">Custom Music</a>
                    </div>
                </div>
                <!-- banner section end -->
            </div>
        </div>

        <div class="row p-4 mt-5">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <CarouselCard title="About Us" message="Hey, we're two crazy young french composers who want to reach
                                        success !" />
                    </div>
                    <div class="carousel-item">
                        <CarouselCard title="Custom your music" message="Get your own music for your project !" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div style="width: 100%;">
            <div class="video-container" style="padding-right: 0;">
                <iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/xR2z1ABLe1U"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>

        <div>
            <h2>Our Partners</h2>
            <!-- <div class="container-fluid px-2">
                <div class="row align-items-start">
                    <div class="col">
                    </div>
                    <li class="col-2" v-for="item in items">
                        <div class="col">
                            <a :href="item.message" target="_blank"><img loading="lazy" :src="item.image" class="ref_logo" alt=""></a>
                        </div>
                        <div class="col">
                        </div>
                    </li>
                    <div class="col">
                        <a href="https://www.ecv.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/ecv.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.coursflorent.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/florent.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.arte.tv/fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/arte.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.ecole-pivaut.fr/?gclid=Cj0KCQjwqKuKBhCxARIsACf4XuHWFaccKvyaEg9-iOZHvBVCNviSP_weepe4_KiSAz8voumM9E17cucaAhpIEALw_wcB"
                            target="_blank"><img loading="lazy" src="../assets/images/Logos_ref/pivaut.jpg"
                                class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="row align-items-end">
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        <a href="https://clermont-filmfest.org/en/global/home/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/clermont.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        <a href="https://www.annecy.org/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/festivalannecy.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        <a href="https://www.gobelins.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/gobelins.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        <a href="https://www.piktura.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/piktura.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        <a href="https://www.soundtrackcologne.de/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/stc.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                </div>
            </div> -->
            <div class="container-fluid px-2">
                <div class="row align-items-start">
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.archimusebordeaux.com/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/archimuse.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.ecv.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/ecv.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.coursflorent.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/florent.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.arte.tv/fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/arte.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.ecole-pivaut.fr/?gclid=Cj0KCQjwqKuKBhCxARIsACf4XuHWFaccKvyaEg9-iOZHvBVCNviSP_weepe4_KiSAz8voumM9E17cucaAhpIEALw_wcB"
                            target="_blank"><img loading="lazy" src="../assets/images/Logos_ref/pivaut.jpg"
                                class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                    </div>
                </div>
                <div class="row align-items-end">
                    <div class="col">
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://clermont-filmfest.org/en/global/home/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/clermont.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.annecy.org/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/festivalannecy.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.gobelins.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/gobelins.jpg" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.piktura.fr/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/piktura.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <a href="https://www.soundtrackcologne.de/" target="_blank"><img loading="lazy"
                                src="../assets/images/Logos_ref/stc.png" class="ref_logo" alt=""></a>
                    </div>
                    <div class="col">
                    </div>
                </div>
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
    padding: 20px;
    width: 500px;
    margin: 0 auto;
    text-align: center;
    font-size: 50px;
    color: #ffffff;
    text-transform: uppercase;
    box-shadow: 0 8px 8px rgb(255, 159, 1, 0.2);
}

.banner_text {
    margin: 0 auto;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 10px;
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

.ref_logo {
    display: block;
    height: auto;
    max-width: 100px;
    width: 100%;
}
</style>