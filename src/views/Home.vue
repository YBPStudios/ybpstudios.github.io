<script setup>
import Header from '@/components/Header.vue';
import CarouselCard from '@/components/CarouselCard.vue';
</script>

<template>
    <div class="container-fluid p-0" id="home">
        <div class="container-fluid p-0" id="background">
            <div class="container_brightness">
                <!-- Menu -->
                <Header />
                <!-- banner section start -->
                <div class="container-fluid px-0 layout_padding">
                    <h1 class="banner_title">The future of original music</h1>
                    <p class="banner_text">“So long as the human spirit thrives on this planet, music in some living
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
    width: auto;
    text-align: center;
    font-size: 50px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
</style>