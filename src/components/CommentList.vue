<template lang="html">
    <div class="comment_list_div">
        <mt-header fixed :title="commentCountStr" style="background-color: #24cf5f">
            <mt-button v-on:click="goBack()" icon="back" slot="left">返回</mt-button>
        </mt-header>
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <mt-loadmore ref="loadmore" :top-method="loadTop" @top-status-change="handleTopChange"
                :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :autoFill="autoFill">
                <div v-for="(item, index) in list">
                    <item_comment v-bind:item="item" v-on:praise="goPraise" v-on:userDetail="goUserDetail" v-on:itemClick="itemClick"></item_comment>
                    <div v-show="index != list.length - 1" class="diver_div"></div>
                </div>
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
        <div class="bottom_div" v-on:click="showCommentPoup">
            <div class="pub_commnet_div">
                <img class="fav_img" src="../assets/ic_comment_40.png">
                <span class="pub_comment_span">发表评论</span>
            </div>
        </div>
        <mt-popup v-model="bottomPopupVisible" position="bottom" class="poup_class">
            <div class="poup_input_div">
                <mt-field class="commnet_input_class" :placeholder="placeHolder" type="textarea" rows="4" v-model="introduction" disableClear></mt-field>
            </div>
            <mt-button v-bind:disabled='isDisabled' size="small" type="primary" class="sen_comment_class" @click.native="pubComment">发送</mt-button>
        </mt-popup>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="mint-popup-1">
            <div class="poup_div">
                <div class="poup_child_div">
                    <img src="../assets/ic_copy.png" class="poup_child_img">
                    <span class="poup_child_span">复制</span>
                </div>
                <div class="poup_child_div" v-on:click="replySomeOne">
                    <img src="../assets/ic_comment_40_pressed.png" class="poup_child_img">
                    <span class="poup_child_span">评论</span>
                </div>
                <div class="poup_child_div">
                    <img src="../assets/ic_share_black_pressed.png" class="poup_child_img">
                    <span class="poup_child_span">分享</span>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    import { Popup, Toast, Indicator, MessageBox, Header, Loadmore } from 'mint-ui'
    import item_comment from './comment/item_comment'
    import * as StringUtils from '../utils/string-utils'
    export default {
        name: "commentlist",
        components: { item_comment },
        data() {
            return {
                list: [],
                allLoaded: false,
                bottomStatus: '',
                wrapperHeight: 0,
                topStatus: '',
                translate: 0,
                newsId: '',
                autoFill: false,
                commentCountStr: '0条评论',
                popupVisible: false,
                bottomPopupVisible: false,
                introduction: '',
                isDisabled: true,
                placeHolder: '发表评论',
                replyObj: {}
            };
        },
        mounted() {
            this.wrapperHeight = document.documentElement.clientHeight;
        },
        computed: {
            ...mapGetters({
                commentList: 'comment_list',
                option: 'comment_list_option'
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
            commentList: function (val, oldVal) {
                if(this.topStatus === 'loading'){
                    this.$refs.loadmore.onTopLoaded()
                }
                if(this.bottomStatus === 'loading'){
                    this.$refs.loadmore.onBottomLoaded()
                }
                if (val) {
                    if (this.option.page == 1) {
                        this.list = val.commentList;
                    } else {
                        this.list = [...this.list, ...val.commentList]
                    }
                } else {
                    this.list = [];
                }
                this.commentCountStr = this.list.length+"条评论"
            },
            '$route' (to, from) {
                if(typeof(to) !== "undefined"){
                    let vue = this
                    let routerName = to.name
                    if(routerName === 'commentlist'){
                        let newsIds = vue.$route.params.newsId
                        vue.newsId = newsIds
                        this.getCommentLists(newsIds, 1, true)
                    }
                }
            },
            introduction(val, oldVal){
                if(val !== ''){
                    this.isDisabled = false
                } else {
                    this.isDisabled = true
                }
            },
        },
        created () {
            let vue = this
            const newsIds = vue.$route.params.newsId
            vue.newsId = newsIds
            this.getCommentLists(newsIds, 1, true)
        },
        methods: {
            ...mapActions([
                'getCommentList'
            ]),
            goBack(){
                this.$router.go(-1)
            },
            getCommentLists(newsId, page, isRefresh){
                this.getCommentList({newsId: newsId, page: page, isRefresh: isRefresh});
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            loadBottom() {
                let vue = this
                var page = vue.option.page
                this.getCommentLists(vue.newsId, page, false)
            },
            handleTopChange(status) {
                this.topStatus = status
            },
            loadTop() {
                let vue = this
                this.getCommentLists(vue.newsId, 1, true)
            },
            goPraise(evt, commentId){
                MessageBox('提示', '接口暂未开放')
            },
            goUserDetail(evt, userId){
                MessageBox('提示', 'userId='+userId)
            },
            itemClick(evt, replyObj){
                this.popupVisible = true
                this.replyObj = replyObj
            },
            showCommentPoup(){
                let vue = this
                vue.bottomPopupVisible = true
            },
            replySomeOne(){
                let vue = this
                vue.bottomPopupVisible = true
                vue.popupVisible = false
                if(!StringUtils.isNull(vue.replyObj) && !StringUtils.isNull(vue.replyObj.commentAuthorId) && !StringUtils.isNull(vue.replyObj.commentAuthorName)){
                    vue.placeHolder = "回复:"+vue.replyObj.commentAuthorName
                }
            },
            pubComment(){
                if(StringUtils.isNull(this.introduction)){
                    Toast("请输入评论内容");
                } else {
                    Indicator.open('加载中...');
                    if(!StringUtils.isNull(this.replyObj)){

                    } else {
                        this.pubCommnet(this.newsdetail.id, this.introduction)
                    }
                }
            }
        }
    }
</script>

<style>

    .page-loadmore-wrapper {
        overflow: scroll;
        margin-top: 40px;
    }

    .mint-loadmore-top span {
        -webkit-transition: .2s linear;
        transition: .2s linear
    }
    .mint-loadmore-top span {
        display: inline-block;
        vertical-align: middle
    }

    .mint-loadmore-top span.is-rotate {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .mint-loadmore-bottom span {
        display: inline-block;
        -webkit-transition: .2s linear;
        transition: .2s linear;
        vertical-align: middle
    }

    .mint-loadmore-bottom span.is-rotate {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .diver_div{
        background-color: #c8c7cc;
        width: 100%;
        height: 1px;
        margin-left: 10px;
    }

    .pub_commnet_div{
        margin-left: 10px;
        height: 30px;
        border-top-width: 0.5px;
        border-top-style: solid;
        border-top-color: #808080;
        width: 200px;
        border-radius: 20px;
        border-left-color: #808080;
        border-left-width: 0.5px;
        border-left-style: solid;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #808080;
        border-right-color: #808080;
        border-right-width: 0.5px;
        border-right-style: solid;
        display: flex;
        align-items: center;
    }

    .pub_commnet_div:active{
        border-radius: 20px;
        border-top-width: 0.5px;
        border-top-style: solid;
        border-top-color: #24cf5f;
        border-right-color: #24cf5f;
        border-right-width: 0.5px;
        border-right-style: solid;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #24cf5f;
        border-left-color: #24cf5f;
        border-left-width: 0.5px;
        border-left-style: solid;
    }

    .mint-popup-1 {
        width: 200px;
        border-radius: 8px;
        padding: 10px;
        transform: translate(-50%, 0);
    }

    .mint-popup-1 {
        width: 300px;
        border-radius: 4px;
        padding: 10px;
        transform: translate(-50%, -50%);
    }

    .mint-popup-1::before {
        triangle: 10px top #fff;
        content: '';
        position: absolute;
        top: -20px;
        right: 50px;
    }

    .poup_div{
        display: flex;
        flex-direction: row;
        width: 300px;
        height: 80px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        align-items: center;
    }

    .poup_child_div{
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
    }

    .poup_child_div:active{
        background-color: #d4d4d4;
    }

    .poup_child_img{
        width: 15px;
        height: 15px;
    }

    .poup_child_span{
        font-size: 10px;
        color: #111111;
        margin-left: 10px;
    }

    .poup_class{
        width: 100%;
        background-color: white;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }

    .poup_input_div{
        border-top-color: #808080;
        border-top-style: solid;
        border-top-width: 0.5px;
        border-right-color: #808080;
        border-right-width: 0.5px;
        border-right-style: solid;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #808080;
        border-left-color: #808080;
        border-left-width: 0.5px;
        border-left-style: solid;
        height: 120px;
        width: 100%;
        border-radius: 5px;
        padding: 5px;
    }

    .commnet_input_class{
        width: 100%;
        height: 100%;
        font-size: 10px;
    }

    .sen_comment_class{
        width: 80px;
        height: 50px;
        margin-top: 10px;
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

</style>