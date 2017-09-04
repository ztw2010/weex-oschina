<template lang="html">
    <div>
        <nav class="sub_category_nav">
            <span class="tab-tag" v-on:click="switchTab('recent_tweet')" :class="currentPage == 'recent_tweet'?'tab-select':''">最新动弹</span>
            <span class="tab-tag" v-on:click="switchTab('hot_tweet')" :class="currentPage == 'hot_tweet'?'tab-select':''">热门动弹</span>
            <span class="tab-tag" v-on:click="switchTab('mine_tweet')" :class="currentPage == 'mine_tweet'?'tab-select':''">我的动弹</span>
        </nav>
        <div class="tweet-content">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "tweet",
        data() {
            return {
                currentPage: 'recent_tweet'
            }
        },
        watch: {
            '$route' (to, from) {
                if(to.name === 'tweet'){
                    this.showRecentTweet();
                }
            }
        },
        created() {
            this.showRecentTweet()
        },
        methods: {
            showRecentTweet(){
                this.$router.push({ name: 'recentweet' })
            },
            switchTab(tabName){
                this.currentPage = tabName
                var vue = this
                switch (tabName) {
                    case 'recent_tweet':
                        this.showRecentTweet();
                        break;
                    case 'hot_tweet':
                        break;
                    case 'mine_tweet':
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style lang="css">

    .tab-tag{
        flex: 1;
        color: #b6b6b6;
    }

    .tab-select {
        color: #24cf5f;
        border-bottom-color: #24cf5f;
        border-bottom-width: 2px;
        border-bottom-style: solid;
    }

    .tweet-content{
        width: 100%;
        height: 100%;
    }

</style>