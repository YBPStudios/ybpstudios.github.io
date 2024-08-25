<script setup>
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
   <head>
      <!-- GENERAL INFO -->
       <meta charset="utf-8">
       <meta name="YellowBuoyProduction Studios" content="YBP Studios is a french music studio specialized for media Soundtracks (films, animation film, documentaries, video games, ads...). Unique story, unique music.">
       <link rel="shortcut icon" type="image/x-icon" href="./assets/images/favicon.ico">
   </head>
   <!-- Page loading -->
   <!-- <div id="loading-overlay">
         <video id="loading-video" src="videos/V3_animation.MOV" muted></video>
      </div> -->

   <RouterView></RouterView>

   <Footer />
</template>
