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
            <slot></slot>
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
</style>