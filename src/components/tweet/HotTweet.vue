<template lang="html">
    <div style="background-color: white">
        <mt-loadmore ref="loadmore" style="height: 100%" :top-method="loadTop" @top-status-change="handleTopChange"
            :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
            <item_recent_tweet v-for="(item, index) in list" :key="item.id" :item="item" :isLast="index === list.length - 1"></item_recent_tweet>
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
        name: "hotTweet",
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
                statuses: 'hot_tweet_list',
                option: 'hot_tweet_option'
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
            this.hotTweet(1)
        },
        mounted() {

        },
        methods: {
            ...mapActions([
                'getHotTweetList'
            ]),
            hotTweet(page) {
                this.getHotTweetList(page)
            },
            loadTop(evt) {
                this.hotTweet(1)
            },
            loadBottom(evt) {
                this.hotTweet(this.option.page)
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
