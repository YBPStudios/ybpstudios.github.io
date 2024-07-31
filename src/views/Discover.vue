<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="page"><img class="bg_image" src="../assets/images/banner-bg.png">

        <Header></Header>

        <br>

        <!-- banner section start -->
        <div class="banner_section layout_padding">
            <div class="container_custom">
                <h1 class="banner_taital">The future of original music</h1>
                <p class="banner_text">“So long as the human spirit thrives on this planet, music in some living form
                    will accompany and sustain it.” Aaron Copland</p>
                <p class="banner_text">“I should be sorry if I only entertained them. I wish to make them better.” Georg
                    Frideric Handel</p>
                <div class="read_bt">
                    <a class="nav-link" href="custom_music.html">Custom Music</a>
                </div>
            </div>
        </div>
        <!-- banner section end -->

    </div>

    <!-- about section start -->
    <div class="about_section layout_padding" style="background-color: black;">
        <div class="container_about">
            <div class="row">
                <div class="col-md-6">
                    <div class="about_taital_main">
                        <h1 class="about_taital">About Us</h1>
                        <p class="about_text">Hey, we're two crazy young french composers who want to reach success !
                        </p>
                        <div class="readmore_bt"><a href="#">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- about section end -->

    <!-- <hr class="solid" style="width: 500px; position: absolute;"> -->

    <!-- custom music section start -->
    <div class="services_section layout_padding" style="background-color: black;">
        <div class="container_custom">
            <div class="row">
                <div class="col-md-6">
                    <div class="services_taital">
                        <h1 class="services_taital">Custom your music</h1>
                        <p class="about_text">Get your own music for your project !</p>
                        <div class="readmore_bt"><a href="#">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- custom music section end -->
</template>