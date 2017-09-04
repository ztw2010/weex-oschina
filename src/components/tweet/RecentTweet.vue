<template lang="html">
    <div>
        <mt-loadmore ref="loadmore" style="height: 100%" :top-method="loadTop" @top-status-change="handleTopChange"
            :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
            <item_recent_tweet v-for="(item, index) in list" :key="item.id" :item="item" :isLast="index !== list.length - 1"></item_recent_tweet>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                </span>
            </div>
            <div slot="bottom" class="mint-loadmore-bottom">
                <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                <span v-show="bottomStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                </span>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { Indicator } from 'mint-ui'
    import item_recent_tweet from '../comment/item_recent_tweet'
    export default {
        name: "recentTweet",
        components: { item_recent_tweet },
        data() {
            return {
                list: [],
                topStatus: '',
                bottomStatus: '',
                allLoaded: false,
                autoFill: false,
            };
        },
        computed: {
            ...mapGetters({
                statuses: 'recent_tweet_list',
                option: 'recent_tweet_option'
            })
        },
        watch: {
            option: {
                handler: function (val, oldVal) {
                    if (val && val.page == 1) {
                        this.list = []
                    }
                },
                deep: true
            },
            statuses: function (val, oldVal) {
                Indicator.close()
                if(this.topStatus === 'loading'){
                    this.$refs.loadmore.onTopLoaded()
                }
                if(this.bottomStatus === 'loading'){
                    this.$refs.loadmore.onBottomLoaded()
                }
                if (val) {
                    if (this.option.page == 1) {
                        this.list = val;
                    } else {
                        this.list = [...this.list, ...val]
                    }
                }
            }
        },
        created() {
            this.recentTweet(1)
        },
        mounted() {

        },
        methods: {
            ...mapActions([
                'getRecentTweetList'
            ]),
            recentTweet(page) {
                Indicator.open('加载中...');
                this.getRecentTweetList(page)
            },
            loadTop(evt) {
                this.recentTweet(1)
            },
            loadBottom(evt) {
                this.recentTweet(this.option.page)
            },
            handleTopChange(status) {
                this.topStatus = status
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
        }
    }
</script>

<style lang="css">


</style>