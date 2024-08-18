<script setup>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
</script>

<template>
    <div class="container-fluid p-0" id="custom_music">
        <div class="container-fluid p-0" id="background">
            <div class="container_brightness">
                <!-- Menu -->
                <Header />
                <!-- custom music section start -->
                <div class="row px-4 layout_padding">
                    <Card title="Personnalize your music" message="Get your own music for your project !"/>
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <h3>Youtube</h3>
                                    <img src="../assets/images/youtub-icon.png" style="width: 50px;">
                                </td>
                                <td>
                                    <h3>Content creator</h3>
                                    <img src="../assets/images/content_creator.png" style="width: 50px;">
                                </td>
                                <td>
                                    <h3>Company</h3>
                                    <img src="../assets/images/Company_logo_final.png" style="width: 50px;">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Channel sound identity
                                </td>
                                <td>
                                    Sound identity
                                </td>
                                <td>
                                    Sound identity / Marketing
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Personnalized original soundtrack <br> for ambitious projects
                                </td>
                                <td>
                                    Idem
                                </td>
                                <td>
                                    Original soundtracks <br> for web promotional ad video
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Created library track to fit your style
                                </td>
                                <td>
                                    Created library track to fit your style
                                </td>
                                <td>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <!-- custom music section end -->
            </div>
        </div>
    </div>
</template>

<style scoped>
#background {
    background-image: url(../assets/images/bg2.jpg);
    background-size: cover;
}
</style>