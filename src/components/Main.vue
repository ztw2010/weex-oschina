<template lang="html">
    <div class="main">
        <div class="main_top">
            <span class="top_title">{{title}}</span>
            <img class="top_image" src="../assets/actionbar_search_icon.png">
        </div>
        <div class="main_content">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <nav class="main_bottom" >
            <div class="bottom_nav" v-on:click="switchTab('multiple')">
                <template v-if="currentPage=='multiple'">
                    <img class="nav_image" src="../assets/ic_nav_news_actived.png">
                </template>
                <template v-else>
                    <img class="nav_image" src="../assets/ic_nav_news_normal.png">
                </template>
                <span :class="currentPage == 'multiple'?'nav_text_actived':'nav_text_normal'">综合</span>
            </div>
            <div class="bottom_nav" v-on:click="switchTab('tweet')">
                <template v-if="currentPage=='tweet'">
                    <img class="nav_image" src="../assets/ic_nav_tweet_actived.png">
                </template>
                <template v-else>
                    <img class="nav_image" src="../assets/ic_nav_tweet_normal.png">
                </template>
                <span :class="currentPage == 'tweet'?'nav_text_actived':'nav_text_normal'">动弹</span>
            </div>
            <div class="bottom_nav" v-on:click="switchTab('discovery')">
                <template v-if="currentPage=='discovery'">
                    <img class="nav_image" src="../assets/ic_nav_discover_actived.png">
                </template>
                <template v-else>
                    <img class="nav_image" src="../assets/ic_nav_discover_normal.png">
                </template>
                <span :class="currentPage == 'discovery'?'nav_text_actived':'nav_text_normal'">发现</span>
            </div>
            <div class="bottom_nav" v-on:click="switchTab('mine')">
                <template v-if="currentPage=='mine'">
                    <img class="nav_image" src="../assets/ic_nav_my_pressed.png">
                </template>
                <template v-else>
                    <img class="nav_image" src="../assets/ic_nav_my_normal.png">
                </template>
                <span :class="currentPage == 'mine'?'nav_text_actived':'nav_text_normal'">我的</span>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: "main",
        data() {
            return {
                title: "",
                currentPage: 'multiple'
            }
        },
        created() {
            this.showMultiplePage()
        },
        computed: {

        },
        methods: {
            showMultiplePage() {
                this.$router.push({ name: 'multiple' })
                this.currentPage = 'multiple'
                this.title = "综合";
            },
            showTweetPage() {
                this.$router.push({ name: 'tweet' })
                this.currentPage = 'tweet'
                this.title = "动弹";
            },
            showDiscoveryPage() {
                this.$router.push({ name: 'discovery' })
                this.currentPage = 'discovery'
                this.title = "发现";
            },
            showMinePage() {
                this.$router.push({ name: 'mine' })
                this.currentPage = 'mine'
                this.title = "我的"
            },
            switchTab(page) {
                var vue = this
                switch (page) {
                    case 'multiple':
                        vue.showMultiplePage()
                        break;
                    case 'tweet':
                        vue.showTweetPage()
                        break;
                    case 'discovery':
                        vue.showDiscoveryPage()
                        break;
                    case 'mine':
                        vue.showMinePage()
                        break;
                    default:
                        vue.showMultiplePage()
                        break;
                }
            }
        }
    }
</script>

<style lang="css">

    .main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .main_top{
        position: fixed;
        top: 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: #24cf5f;
        height: 40px;
        justify-content: center;
        align-items: center;
    }

    .top_title{
        display: flex;
        width: 100px;
        height: 40px;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
    }

    .top_image{
        position: absolute;
        right: 5px;
        top: auto;
        width: 30px;
        height: 30px;
    }

    .main_content{
        width: 100%;
        flex: 9;
        margin-top: 75px;
        margin-bottom: 70px;
    }

    .main_bottom{
        position: fixed;
        bottom: 0px;
        width: 100%;
        flex: 1;
        border-top-style:solid;
        border-top-width: 0.5px;
        border-top-color: silver;
        display: flex;
        flex-direction: row;
        background-color: white;
    }

    .bottom_nav{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 70px;
        font-size: 20px;
        color: black;
        justify-content: center;
        align-items: center;
    }

    .nav_image{
        width: 20px;
        height: 20px;
    }

    .nav_text_normal{
        color: black;
        font-size: 15px;
    }

    .nav_text_actived{
        color: #24cf5f;
        font-size: 15px;
    }

    .fade-enter-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>