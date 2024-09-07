<script setup>
import { RouterView } from "vue-router";

</script>

<template>

   <!-- Page loading -->
   <!-- <div id="loading-overlay">
         <video id="loading-video" src="videos/V3_animation.MOV" muted></video>
      </div> -->
   
   <RouterView v-slot="{ Component }">
      <transition name="fade">
         <component :is="Component" />
      </transition>
   </RouterView>

</template>

<style scoped>
.fade-enter-active {
   transition: opacity 2s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}
 
.fade-enter-from,
.fade-leave-to {
   opacity: 0.6;
}
</style>
