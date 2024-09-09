<template>
    <div class="container-fluid" style="">
        <hr>
        <div style="padding-top: 10px;">
            <div>
                <h1>Contact us / Follow us</h1>
            </div>

            <div class="row p-4">

                <div class="location_main col-6 mx-auto">
                    <div class="call_text"><img src="../assets/images/mail-icon.png" style="width: 45px;"></div>

                    <div class="click_link">
                        <router-link :to="{ name: 'contact' }" class="call_text">
                            guillianmarquer.composer@ybpstudios.com
                        </router-link>
                    </div>

                    <div class="click_link">
                        <router-link :to="{ name: 'contact' }" class="call_text">
                            thomaspeyrounette.composer@ybpstudios.com
                        </router-link>
                    </div>
                </div>

                <div class="social_icon col-6 mx-auto">
                    <ul>
                        <li>
                            <div class="call_text"><a href="https://www.youtube.com/@YellowBuoyProduction"
                                    style="padding-right: 10px;"><img src="../assets/images/youtube-app-white-icon.png">
                                    &nbsp;@YellowBuoyProduction</a></div>
                        </li>
                        <li>
                            <div class="call_text"><a href="https://www.instagram.com/ybpstudios/"
                                    style="padding-left: 10px;"><img src="../assets/images/instagram-white-icon.png">
                                    &nbsp;@ybpstudios</a></div>
                        </li>
                    </ul>
                    <h4>© 2024 YellowBuoyProduction. All rights reserved.
                        <div class="click_link inline-div">
                            <router-link :to="{ name: 'CGU' }" style="font-size: 10px;">
                                <u>Terms and Conditions.</u>
                            </router-link>
                        </div>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.inline-div {
    display: inline;
}

.container-fluid {
    padding: 0;
}

a {
    font-size: 13px;
}

hr {
    margin-top: 0;
    width: 100%;
    height: 2px;
    opacity: 100%;
}

.footer_section {
    object-fit: contain;
}

.row {
    object-fit: contain;
}

.input_btn_main {
    width: 35%;
    display: flex;
    background-color: #ffffff;
    border-radius: 40px;
    padding: 8px 0px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    text-decoration: underline;
    font-size: 28px;
    padding-top: 20px;
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
    padding-top: 30px;
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
    padding-top: 30px;
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

.click_link {}

.click_link a {}

.click_link a:hover {
    color: #fda400;
}

.call_text img {
    width: 20px;
}

h4 {
    font-size: 10px;
    text-align: center;
}
</style>