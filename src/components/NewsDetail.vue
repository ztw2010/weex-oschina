<template lang="html">
    <div class="newsdetail_div">
        <div class="toolbar_div">
            <mt-header fixed style="background-color: #24cf5f">
               <mt-button v-on:click="goBack()" icon="back" slot="left">咨讯详情</mt-button>
               <div slot="right" class="commnet_div" v-on:click="goCommentList()">
                  <img class="right_img" src="../assets/ic_comment.png" slot="right">
                  <span class="commnet_count">{{newsdetail.commentCount}}</span>
              </div>
            </mt-header>
        </div>
        <div class="news_content_div">
            <div class="title_div">
                <span class="title_class">{{newsdetail.title}}</span><br/>
                <span class="author_class">@{{newsdetail.author}}&nbsp;&nbsp;&nbsp;&nbsp;发布于{{new Date(newsdetail.pubDate) | dateFromat('yyyy年MM月dd日')}}</span>
            </div>
            <div v-html="newsdetail.body"></div>
        </div>
        <div class="bottom_div" v-on:click="showPoup">
            <div class="pub_commnet_div">
                <img class="fav_img" src="../assets/ic_comment_40.png">
                <span class="pub_comment_span">发表评论</span>
            </div>
            <img class="fav_img_class" src="../assets/ic_fav_normal.png">
        </div>
        <mt-popup v-model="popupVisible" position="bottom" class="poup_class">
            <div class="poup_input_div">
                <mt-field class="commnet_input_class" placeholder="发表评论" type="textarea" rows="4" v-model="introduction" disableClear></mt-field>
            </div>
            <mt-button v-bind:disabled='isDisabled' size="small" type="primary" class="sen_comment_class" @click.native="sendComment">发送</mt-button>
        </mt-popup>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Popup, Toast, Indicator,MessageBox,Header } from 'mint-ui'
import * as StringUtils from '../utils/string-utils'
export default {
    name: "newsdetail",
    data() {
        return {
            newsdetail:{},
            popupVisible: false,
            introduction: '',
            isDisabled: true
        };
    },
    computed: {
        ...mapGetters({
            newsDetail: 'news_detail_content',
            pubResult: 'pub_comment_result'
        })
    },
    watch: {
        newsDetail: function (val, oldVal) {
            if (val) {
                this.newsdetail = val
            }
        },
        '$route.params.newsId' (newsId) {
            console.log("to=="+newsId);
            if(typeof(newsId) !== "undefined"){
                this.getNewsDetail(newsId)
            }
        },
        introduction(val, oldVal){
            if(val !== ''){
                this.isDisabled = false
            } else {
                this.isDisabled = true
            }
        },
        pubResult(val, oldVal){
            Indicator.close()
            this.popupVisible = false
            this.introduction = ''
            if(val){
                if(val.error === 200){
                    MessageBox.alert('发表评论成功', '提示');
                } else {
                    MessageBox.alert(val.error_description, '提示');
                }
            } else {
                MessageBox.alert('发表评论失败', '提示');
            }
        }
    },
    created () {
        let vue = this
        const newsId = vue.$route.params.newsId
        this.getNewsDetail(newsId)
    },
    methods: {
        ...mapActions([
            'getNewsDetailContent',
            'pubCommnet'
        ]),
        getNewsDetail(newsId){
            this.getNewsDetailContent(newsId);
        },
        goBack(){
            this.$router.go(-1)
        },
        showPoup(){
            let vue = this
            vue.popupVisible = true
        },
        sendComment(){
            if(StringUtils.isNull(this.introduction)){
                Toast("请输入评论内容");
            } else {
                Indicator.open('加载中...');
                this.pubCommnet(this.newsdetail.id, this.introduction)
            }
        },
        goCommentList(){
            this.$router.push({ name: 'commentlist' })
        }
    }
}
</script>

<style lang="css">

    .newsdetail_div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .toolbar_div{
        position: fixed;
        top: 0px;
        width: 100%;
    }

    .title_div{
        width: 100%;
        height: auto;
    }

    .title_class{
        font-size: 20px;
        width: 100%;
        height: 50px;
        color: #111111;
    }

    .author_class{
        font-size: 15px;
        width: 100%;
        height: 50px;
        color: #6a6a6a;
    }

    .commnet_div{
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
    }

    .right_img{
        position: absolute;
        right: auto;
        height: auto;
        width: 30px;
        height: 27px;
    }

    .commnet_count{
        position: absolute;
        right: 12px;
        height: auto;
        font-size: 5px;
        color: white;
        z-index: 10;
    }

    .news_content_div{
        padding: 10px;
        margin-bottom: 40px;
        width: 100%;
        height: auto;
        margin-top: 40px;
        overflow-y:scroll;
    }

    .bottom_div{
        position: fixed;
        bottom: 0px;
        height: 50px;
        width: 100%;
        z-index: 10;
        background-color: white;
        border-top-color: #c8c7cc;
        border-top-style: solid;
        border-top-width: 1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
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

    .fav_img{
        width: 20px;
        height: 17px;
        margin-left: 10px;
    }

    .pub_comment_span{
        font-size: 10px;
        color: #9A9A9A;
        margin-left: 20px;
    }

    .fav_img_class{
        width: 20px;
        height: 20px;
        margin-left: 20px;
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