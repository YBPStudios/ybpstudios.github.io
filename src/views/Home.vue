<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="container-fluid p-0 bg-black">
        <div class="container-fluid p-0" id="page">
            <div class="container_brightness">
                <!-- Image de fond -->
                <!-- <img class="image-fluid" id="bg_image" src="../assets/images/banner-bg.png"> -->
                <!-- Menu -->
                <Header></Header>
                <br>
                <!-- banner section start -->
                <div class="layout_padding">
                    <div class="container_custom">
                        <h1 class="banner_taital">The future of original music</h1>
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
                </div>
                <!-- banner section end -->
            </div>
        </div>

        <div class="row p-4 mt-5">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <!-- about section start -->
                        <div class="about_section p-2">
                            <div class="container_about">

                                <div class="col-md-6 mx-auto">
                                    <h1 class="about_taital">About Us</h1>
                                    <p class="about_text">Hey, we're two crazy young french composers who want to reach
                                        success !
                                    </p>
                                    <div class="readmore_bt"><a href="#">Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <!-- about section end -->
                    </div>
                    <div class="carousel-item">
                        <!-- custom music section start -->
                        <div class="services_section p-2">
                            <div class="container_custom">
                                <div class="col-md-6 mx-auto">
                                    <div class="services_taital">
                                        <h1>Custom your music</h1>
                                        <p class="about_text">Get your own music for your project !</p>
                                        <div class="readmore_bt"><a href="#">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- custom music section end -->
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