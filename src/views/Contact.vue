<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="container-fluid p-0" id="custom_music">
        <div class="container-fluid p-0" id="background">
            <div class="container_brightness">
                <!-- Menu -->
                <Header />
                <!-- contact section start -->
                <div class="container-fluid px-0">
                    <div class="row px-4 layout_padding">
                        <div class="col-8 mx-auto">
                            <h1 class="contact_title">Request A Call Back</h1>
                            <div class="email_text">
                                <div class="form-group">
                                    <input type="text" class="email-bt" placeholder="Name" name="Email">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="email-bt" placeholder="Phone Number" name="Email">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="email-bt" placeholder="Email" name="Email">
                                </div>
                                <div class="form-group">
                                    <textarea class="massage-bt" placeholder="Message" rows="5" id="comment"
                                        name="Massage"></textarea>
                                </div>
                                <div class="send_btn"><a href="#">SEND</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- contact section end -->
            </div>
        </div>
    </div>
</template>

<style scoped>
#background {
    background-image: url(../assets/images/bg4.jpg);
    background-size: cover;
}

.contact_title {
    width: 100%;
    float: left;
    font-size: 40px;
    color: #fff;
    text-align: center;
    font-weight: bold;
}

.email_text {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding-top: 120px;
}

.email-bt {
    width: 100%;
    float: left;
    font-size: 18px;
    color: #393838;
    margin-bottom: 20px;
    padding: 10px 15px;
    border: 0px;
    border: 1px solid #2b2278 !important;
}

.massage-bt {
    width: 100%;
    float: left;
    font-size: 18px;
    color: #393838;
    margin-bottom: 20px;
    padding: 10px 15px;
    border: 0px;
    border: 1px solid #2b2278 !important;
}

.send_btn {
    width: 170px;
    margin: 0 auto;
    text-align: center;
}

.send_btn a {
    width: 100%;
    float: right;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    border-radius: 30px;
    background-color: #000d10;
    padding: 7px;
}

.send_btn a:hover {
    color: #ffffff;
    background-color: #5b2d97;
}
</style>