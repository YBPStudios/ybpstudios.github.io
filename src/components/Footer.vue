<template>
    <div class="container-fluid">
        <hr style="margin-top: 0;">
        <div style="padding-top: 10px;">
            <div>
                <h1 style="font-size: 28px; padding-top: 20px;">Contact us / Follow us</h1>
            </div>

            <div class="row p-4">

                <div class="location_main col-6 mx-auto" style="padding-top: 30px;">
                    <div class="call_text"><img src="../assets/images/mail-icon.png"></div>

                    <router-link :to="{ name: 'contact' }" class="call_text">
                        guillianmarquer.composer@ybpstudios.com
                    </router-link>

                    <router-link :to="{ name: 'contact' }" class="call_text">
                        thomaspeyrounette.composer@ybpstudios.com
                    </router-link>

                </div>

                <div class="social_icon col-6 mx-auto" style="text-align: center; padding-top: 30px;">
                    <ul>
                        <li>
                            <div class="call_text"><a href="https://www.youtube.com/@YellowBuoyProduction"
                                    style="padding-right: 10px; font-size: 13px;"><img
                                        src="../assets/images/youtube-app-white-icon.png" style="width: 20px;">
                                    &nbsp;@YellowBuoyProduction</a></div>
                        </li>
                        <li>
                            <div class="call_text"><a href="https://www.instagram.com/ybpstudios/"
                                    style="padding-left: 10px; font-size: 13px;"><img
                                        src="../assets/images/instagram-white-icon.png" style="width: 20px;">
                                    &nbsp;@ybpstudios</a></div>
                        </li>
                    </ul>
                    <h4>© 2024 YellowBuoyProduction. All rights reserved.
                        <router-link :to="{ name: 'CGU' }">
                            Terms and Conditions.
                        </router-link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

h4 {
    font-size: 10px;
    text-align: center;
}
</style>