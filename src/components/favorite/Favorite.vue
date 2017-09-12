<template lang="html">
    <div style="background-color: white">
        <mt-header fixed style="background-color: #24cf5f">
           <mt-button v-on:click="goBack()" icon="back" slot="left">收藏</mt-button>
        </mt-header>
        <mt-loadmore ref="loadmore" style="height: 100%;margin-top: 50px" :top-method="loadTop" @top-status-change="handleTopChange"
            :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
            <item_favorite_list v-for="(item, index) in list" :key="item.objid" :item="item" :isLast="index === list.length - 1" v-on:itemClick="gotoDetail">
            </item_favorite_list>
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
    import { Popup, MessageBox, Header, Loadmore } from 'mint-ui'
    import item_favorite_list from './item_favorite_list'
    export default {
        name: "favorite_list",
        components: { item_favorite_list },
        data() {
            return {
                list: [],
                topStatus: '',
                bottomStatus: '',
                allLoaded: false,
                autoFill: false,
            };
        },
        mounted() {
        },
        computed: {
            ...mapGetters({
                statuses: 'favorite_list',
                page: 'favorite_list_page'
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
            }
        },
        created () {
            this.getFavoritesList(1)
        },
        methods: {
            ...mapActions([
                'getFavoriteList'
            ]),
            loadTop(evt) {
                this.getFavoritesList(1)
            },
            loadBottom(evt) {
                this.getFavoritesList(this.page)
            },
            handleTopChange(status) {
                this.topStatus = status
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            getFavoritesList(page){
                this.getFavoriteList(page)
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
                if(detailObj.newsType !== 4){
                    this.$router.push({'name' : 'newsdetail', 'params': {'newsId': detailObj.newsId, 'newsType': detailObj.newsType, 'newsUrl': detailObj.newsUrl}})
                } else {
                    this.$router.push({'name' : 'newsdetail', 'params': {'newsId': detailObj.newsId, 'newsType': detailObj.newsType}})
                }
            }
        }
    }
</script>

<style scoped>


</style>