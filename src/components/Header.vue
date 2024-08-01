<!-- Header template -->

<template>
   <!-- Le container prend toute la place possible et s'adapte à la taille de l'écran -->
   <div class="container-fluid">
      <!-- Tous les éléments sont organisés par lignes -->
      <div class="row">
         <div class="col col-3 mx-auto pt-4">
            <img src="../assets/images/YBP_head_logo.png">
         </div>
      </div>
      <div class="row">
         <div class="col col-4 mx-auto pt-2">
            <hr class="solid">
         </div>        
      </div>


      <div class="menu_main">
         <ul>
            <li>
               <router-link :to="{ name: 'home' }">
                  Discover
               </router-link>
            </li>
            <!-- <li class="dropdown">
                  <a href="library.html">Library</a>
                  <ul class="dropdown-menu">
                     <li><a href="futuristic.html"><img src="../assets/images/Futuristic.png" alt="Futuristic"></a></li>
                     <li><a href="medieval.html"><img src="../assets/images/Medieval.png" alt="Medieval"></a></li>
                     <li><a href="action-scenes.html"><img src="../assets/images/Action scenes.png"
                              alt="Action Scenes"></a></li>
                     <li><a href="emotional.html"><img src="../assets/images/Emotional.png" alt="Emotional"></a></li>
                     <li><a href="funny.html"><img src="../assets/images/Funny.png" alt="Funny"></a></li>
                     <li><a href="romantic.html"><img src="../assets/images/Romantic.png" alt="Romantic"></a></li>
                  </ul>
               </li> -->
            <li>
               <router-link :to="{ name: 'custom_music' }">
                  Custom music
               </router-link>
            </li>
            <li class="dropdown">
               <router-link :to="{ name: 'about' }">
                  The studios
               </router-link>
               <!-- <ul class="dropdown-menu">
                     <li><a href="#">About us</a></li>
                  </ul> -->
            </li>
            <li>
               <router-link :to="{ name: 'contact' }">
                  Contact us
               </router-link>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   name: "Header",
};
</script>