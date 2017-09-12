<template lang="html">
    <div style="background-color: white">
        <mt-header fixed style="background-color: #24cf5f">
           <mt-button v-on:click="goBack()" icon="back" slot="left">{{title}}</mt-button>
        </mt-header>
        <mt-loadmore ref="loadmore" style="height: 100%;margin-top: 50px" :top-method="loadTop" @top-status-change="handleTopChange"
            :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
            <item_follow_list v-for="(item, index) in list" :key="item.userid" :item="item" :isLast="index === list.length - 1" v-on:itemClick="gotoDetail">
            </item_follow_list>
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
    import { Header, Loadmore } from 'mint-ui'
    import item_follow_list from './item_follow_list'
    export default {
        name: "follow",
        components: { item_follow_list },
        data() {
            return {
                list: [],
                topStatus: '',
                bottomStatus: '',
                allLoaded: false,
                autoFill: false
            };
        },
        mounted() {

        },
        computed: {
            title: function () {
                if(this.type === 0){
                    return '粉丝列表'
                } else if(this.type === 1){
                    return '关注列表'
                }
            },
            ...mapGetters({
                statuses: 'follow_list',
                page: 'follow_page',
                type: 'follow_type'
            })
        },
        watch: {
            page: {
                handler: function (val, oldVal) {
                    if (val && val.page == 1) {
                        this.list = []
                    }
                    if(!this.statuses){
                        this.hideLoading()
                    }
                },
                deep: true
            },
            statuses: function (val, oldVal) {
                this.hideLoading()
                if (val) {
                    if (this.page == 1 || this.page == 2) {
                        this.list = val;
                    } else {
                        this.list = [...this.list, ...val]
                    }
                }
            },
            type: function (val, oldVal) {
                this.getFollowsList(1)
            },
        },
        created () {
            this.getFollowsList(1)
        },
        methods: {
            ...mapActions([
                'getFollowList'
            ]),
            loadTop(evt) {
                this.getFollowsList(1)
            },
            loadBottom(evt) {
                this.getFollowsList(this.page)
            },
            handleTopChange(status) {
                this.topStatus = status
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            getFollowsList(page){
                this.getFollowList(page)
            },
            hideLoading(){
                if(this.topStatus === 'loading'){
                    this.$refs.loadmore.onTopLoaded()
                }
                if(this.bottomStatus === 'loading'){
                    this.$refs.loadmore.onBottomLoaded()
                }
            },
            goBack(){
                this.$router.go(-1)
            },
            gotoDetail(detailObj){

            }
        }
    }
</script>

<style scoped>
</style>