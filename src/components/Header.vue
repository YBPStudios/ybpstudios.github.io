<!-- Header template -->
<template>

   <div class="container-fluid" id="header">

      <!-- Logo -->
      <div class="row">
         <div class="col-3 mx-auto pt-4">
            <img src="../assets/images/YBP_head_logo.png">
         </div>
      </div>

      <!-- Séparateur -->
      <div class="row">
         <div class="col-4 mx-auto g-4">
            <hr class="opacity-100" id="solid">
         </div>
      </div>

      <!-- Menu -->
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
            <li>
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

<style scoped>
hr {
   height: 2px;
}

#solid {
   color: #fda400;
}

.menu_main {
   margin-left: auto;
   margin-right: auto;
   z-index: 1;
   display: block;
   position: relative;
   -ms-flex-direction: column;
   flex-direction: column;
   padding-left: 0;
   list-style: none;
   width: 100%;
   text-align: center;
}

ul {
   margin: 0px;
   padding: 0px;
   list-style: none;
   display: inline-flex;
}

li {
   position: relative;
   float: left;
   padding: 10px;
   font-size: 18px;
   text-transform: uppercase;
   color: #fff;
   border-radius: 40px;
}

li a {
   color: #ffffff;
   padding: 10px 20px;
   border-radius: 5px;
   display: inline-block;
   box-sizing: border-box;
   transition: transform 0.3s, background-color 0.3s, border 0.3s;
}

li a:hover {
   color: #ffffff;
   background-color: #000000;
   border: 1px solid #ccc;
   box-sizing: border-box;
   transform: scale(1.1);
}

/* Dropdown menu styles */
.dropdown-menu {
   display: none;
   position: absolute;
   top: 100%;
   left: 50%;
   transform: translateX(-50%);
   background-color: rgba(0, 0, 0, 0.6);
   list-style: none;
   padding: 0;
   margin: 0;
   border-radius: 5px;
   z-index: 1000;
   display: flex;
   flex-direction: row;
}

.dropdown-menu li {
   width: auto;
   padding: 0;
   display: flex;
   align-items: center;
}

.dropdown-menu li a {
   display: flex;
   align-items: center;
   padding: 10px;
   color: #fff;
   text-align: left;
   box-sizing: border-box;
   transition: transform 0.3s, background-color 0.3s, border 0.3s;
   text-decoration: none;
}

.dropdown-menu li a img {
   max-width: 150px;
   width: 150px;
   height: auto;
   margin-right: 10px;
   border-radius: 5px;
}

.dropdown-menu li a:hover {
   background-color: #444;
   transform: scale(1.1);
}
</style>