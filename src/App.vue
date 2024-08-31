<script setup>
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
   
   <!-- Page loading -->
   <!-- <div id="loading-overlay">
         <video id="loading-video" src="videos/V3_animation.MOV" muted></video>
      </div> -->

   <RouterView></RouterView>

   <Footer />
</template>
