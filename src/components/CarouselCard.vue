<script setup>
defineProps({
    title: String,
    message: String
})
</script>

<template>
    <div class="about_section p-2">
        <div class="container_about">
            <div class="col-md-6 mx-auto">
                <h1 class="about_taital">{{ title }}</h1>
                <p class="about_text">{{ message }}
                </p>
                <div class="readmore_bt"><a href="#">Read More</a></div>
            </div>
        </div>
    </div>
</template>
