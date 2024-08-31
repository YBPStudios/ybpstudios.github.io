<script setup>
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
   <head>
      <!-- GENERAL INFO -->
       <meta charset="utf-8">
       <meta name="description" content="YBP Studios is a French music studio specialized in media soundtracks (films, animation films, documentaries, video games, ads). Unique story, unique music.">
       <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico" sizes="16x16">
   </head>
   <!-- Page loading -->
   <!-- <div id="loading-overlay">
         <video id="loading-video" src="videos/V3_animation.MOV" muted></video>
      </div> -->

   <RouterView></RouterView>

   <Footer />
</template>
