<script setup>
defineProps({
    title: String,
    message: String
})
</script>

<template>
    <h1 class="about_title">{{ title }}</h1>
    <p class="about_text">{{ message }}
    </p>
    <div class="col-10">
        <div class="readmore_bt">
            <a href="#">Read More</a>
        </div>
    </div>
</template>

<style scoped>
.about_title {
    width: 100%;
    float: left;
    font-size: 40px;
    color: #fff;
    font-weight: bold;
}

.about_text {
    width: 100%;
    float: left;
    font-size: 16px;
    color: #fff;
    margin: 0px;
    padding-top: 40px;
}

.readmore_bt {
    width: 170px;
    float: left;
    margin-top: 50px;
    margin-bottom: 20px;
}

.readmore_bt a {
   color: #ffffff;
   padding: 10px 20px;
   border-radius: 5px;
   display: inline-block;
   box-sizing: border-box;
   transition: transform 0.3s, background-color 0.3s, border 0.3s;
}

.readmore_bt a:hover {
   color: #ffffff;
   background-color: #000000;
   border: 1px solid #ccc;
   box-sizing: border-box;
   transform: scale(1.1);
}
</style>