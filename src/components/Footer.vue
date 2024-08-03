<template>
    <div class="footer_section pt-5">

        <div class="input_btn_main">
            <input type="text" class="mail_text" placeholder="Enter your email" name="Enter your email">
            <div class="subscribe_bt"><a href="#">Subscribe</a></div>
        </div>

        <div class="row p-4" id="footer-background">
            <div class="location_main col-6 mx-auto">
                <div class="call_text"><img src="../assets/images/call-icon.png"></div>
                <div class="call_text"><a href="#">Call +00 123456789</a></div>
                <div class="call_text"><img src="../assets/images/mail-icon.png"></div>
                <div class="call_text"><a href="#">yellowbuoyproduction@gmail.com</a></div>
            </div>
            <div class="social_icon col-6 mx-auto">
                <ul>
                    <li><a href="#"><img src="../assets/images/fb-icon.png"></a></li>
                    <li><a href="#"><img src="../assets/images/twitter-icon.png"></a></li>
                    <li><a href="#"><img src="../assets/images/linkedin-icon.png"></a></li>
                    <li><a href="#"><img src="../assets/images/instagram-icon.png"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer_section {
    background-color: #000;
    z-index: -1;
}

#footer-background {
    background-image: url(../assets/images/footer-bg.png);
    background-size: cover;
}

.row {
    height: 500px;
}

.input_btn_main {
    width: 50%;
    display: flex;
    background-color: #ffffff;
    border-radius: 40px;
    padding: 8px 0px;
    margin: 0 auto;
}

.mail_text {
    width: 100%;
    float: left;
    font-size: 18px;
    color: #2b2c2c;
    background-color: #ffffff;
    height: auto;
    padding: 5px 20px;
    border-radius: 20px;
    border: 0px;
}

.subscribe_bt {
    float: right;
}

.subscribe_bt a {
    width: 170px;
    float: left;
    font-size: 18px;
    color: #5b2d97;
    background-color: transparent;
    padding: 5px 0px;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
}

.subscribe_bt a:hover {
    color: #000;
    background-color: transparent;
}

.social_icon {
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

.social_icon ul {
    margin: 0px;
    padding: 0px;
    display: inline-block;
    text-align: center;
}

.social_icon li {
    float: left;
    padding: 30px 5px;
}

.location_main {
    text-align: center;
    padding-top: 40px;
}

.call_text {
    width: 100%;
    float: left;
    font-size: 16px;
    color: #ffffff;
    padding-top: 10px
}

.call_text a {
    color: #ffffff;
}

.call_text a:hover {
    color: #fda400;
}
</style>