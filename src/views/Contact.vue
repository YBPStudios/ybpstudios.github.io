<script setup>
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

// Sending pre-fill email

// Get form values
const name = ref('');
const phone = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

// Construct the mailto link with pre-filled information
function sendEmail() {

    // Encoding values
    const encodedName = encodeURIComponent(name.value);
    const encodedPhone = encodeURIComponent(phone.value);
    const encodedEmail = encodeURIComponent(email.value);
    const encodedSubject = encodeURIComponent(subject.value);
    const encodedMessage = encodeURIComponent(message.value);

    // Mailto with pre-filled informations
    const mailtoLink = `mailto:guillianmarquer.composer@ybpstudios.com,thomaspeyrounette.composer@ybpstudios.com?subject=${encodedSubject}&body=${encodedMessage}%0D%0A%0D%0A%0D%0A---%0D%0A${encodedName}%0D%0APhone: ${encodedPhone}%0D%0AEmail: ${encodedEmail}`;

    // Open the mailto link in the default email client
    window.location.href = mailtoLink;
}

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
                            <div class="contact_subtitle pb-4">Informations above will pre-fill your email.<br>
                                *Feel free to enter necessary informations to let us reach you back.</div>
                            <div class="email_text">
                                <div class="form-group">
                                    <input type="text" v-model="name" class="email-bt" placeholder="Name" id="name">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="phone" class="email-bt" placeholder="Phone Number*"
                                        id="phone">
                                </div>
                                <div class="form-group">
                                    <input type="email" v-model="email" class="email-bt" placeholder="Email*" id="email">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="subject" class="email-bt" placeholder="Message Subject"
                                        id="subject">
                                </div>
                                <div class="form-group">
                                    <textarea v-model="message" class="message-bt" placeholder="Message" rows="5"
                                        id="message"></textarea>
                                </div>
                                <div class="send_btn">
                                    <a href="javascript:void(0);" @click="sendEmail">SEND</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- contact section end -->
            </div>
        </div>
    </div>

    <Footer />

</template>

<style scoped>
#background {
    background-image: url(../assets/images/Abstract_background-min.png);
}

.contact_title {
    width: 100%;
    float: left;
    font-size: 40px;
    color: #fff;
    text-align: center;
    font-weight: bold;
}

.contact_subtitle {
    width: 100%;
    float: left;
    font-size: 20px;
    color: white;
    text-align: center;
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

.message-bt {
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
    margin-bottom: 10px;
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
