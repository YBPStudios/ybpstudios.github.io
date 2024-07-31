<!-- Header template -->

<template>
    <div class="header_main">
       <div class="container_head">
          
          <div class="logo"><img src="../assets/images/YBP_head_logo.png"></div>
          <hr class="solid" style="width: 500px;">

             <div class="menu_main">
                <ul>
                   <li><a href="index.html">Discover</a></li>
                   <li class="dropdown">
                      <a href="library.html">Library</a>
                      <ul class="dropdown-menu">
                         <li><a href="futuristic.html"><img src="../assets/images/Futuristic.png" alt="Futuristic"></a></li>
                         <li><a href="medieval.html"><img src="../assets/images/Medieval.png" alt="Medieval"></a></li>
                         <li><a href="action-scenes.html"><img src="../assets/images/Action scenes.png" alt="Action Scenes"></a></li>
                         <li><a href="emotional.html"><img src="../assets/images/Emotional.png" alt="Emotional"></a></li>
                         <li><a href="funny.html"><img src="../assets/images/Funny.png" alt="Funny"></a></li>
                         <li><a href="romantic.html"><img src="../assets/images/Romantic.png" alt="Romantic"></a></li>
                      </ul>
                   </li>
                   <li><a href="custom_music.html">Custom music</a></li>
                   <li class="dropdown">
                      <a href="about.html">The studios</a>
                      <ul class="dropdown-menu">
                         <li><a href="#">About us</a></li>
                      </ul>
                   </li>
                   <li><a href="contact.html">Contact us</a></li>
                </ul>
             </div>
       </div>
    </div>
</template>

<script>
export default {
    name: "Header",
};
</script>