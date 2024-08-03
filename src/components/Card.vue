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
}

.readmore_bt a {
    width: 100%;
    float: left;
    font-size: 16px;
    color: #ffffff;
    background-color: #000d10;
    text-align: center;
    padding: 10px 0px;
    border-radius: 30px;
    font-weight: bold;
    text-transform: uppercase;
}

.readmore_bt a:hover {
    color: #ffffff;
    background-color: #2b2278;
}
</style>