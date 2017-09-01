<template lang="html">
    <div class="newsdetail_div">
        <div class="toolbar_div">
            <mt-header fixed style="background-color: #24cf5f">
               <mt-button v-on:click="goBack()" icon="back" slot="left">{{newsType | transformTitleByType}}</mt-button>
               <div slot="right" class="commnet_div" v-on:click="goCommentList()">
                  <img class="right_img" src="../assets/ic_comment.png" slot="right">
                  <span class="commnet_count">{{newsdetail.commentCount}}</span>
              </div>
            </mt-header>
        </div>
        <div v-if="newsType === 4">
            <div class="news_content_div">
                <div class="title_div">
                    <span class="title_class">{{newsdetail.title}}</span><br/>
                    <span class="author_class">@{{newsdetail.author}}&nbsp;&nbsp;&nbsp;&nbsp;发布于{{new Date(newsdetail.pubDate) | dateFromat('yyyy年MM月dd日')}}</span>
                </div>
                <div v-html="newsdetail.body"></div>
            </div>
        </div>
        <div v-else-if="newsType === 1" style="margin-top: 40px;">
            <div class="type0_top_class">
                <img v-lazy="newsdetail.imageUrl" class="logo_img_class">
                <span class="type0_title_class">{{newsdetail.title}}</span>
            </div>
            <div class="type0_diver_class"></div>
            <div class="type0_about_class">
                <div class="about_item_div_class">
                    <img class="about_img_class" src="../assets/ic_website.png">
                    <span class="about_span_class">软件官网</span>
                </div>
                <div class="about_item_div_class">
                    <img class="about_img_class" src="../assets/ic_documents.png">
                    <span class="about_span_class">软件文档</span>
                </div>
            </div>
            <div class="type0_body_class" v-html="newsdetail.body"></div>
            <div class="type0_bottom_class">
                <div class="type0_bottom_item_class">
                    <img class="item_img_class" src="../assets/ic_comment_40.png">
                    <span class="item_span_class">评论({{newsdetail.commentCount}})</span>
                </div>
                <div class="type0_bottom_item_class">
                    <img v-if="newsdetail.favorite === 0" class="item_img_class" src="../assets/ic_fav_normal.png">
                    <img v-else-if="newsdetail.favorite === 1" class="item_img_class" src="../assets/ic_faved_normal.png">
                    <span class="item_span_class">收藏({{newsdetail.favoriteCount}})</span>
                </div>
                <div class="type0_bottom_item_class">
                    <img class="item_img_class" src="../assets/ic_share_black_pressed.png">
                    <span class="item_span_class">分享</span>
                </div>
            </div>
        </div>
        <div v-else-if="newsType === 2" style="margin-top: 40px;">
            <span class="type2_title_class">{{newsdetail.title}}</span>
            <div v-if="newsdetail.tagBeans" class="type2_tag_div_class">
                <span class="type2_tag_span_class" v-for="tag in newsdetail.tagBeans">{{tag.tagName}}</span>
            </div>
            <div class="type2_body_div" v-html="newsdetail.body"></div>
            <div class="type2_bottom_div_class">
                <span class="type2_author_span_class">{{newsdetail.author}}  {{new Date(newsdetail.pubDate) | dateFromat('yyyy年MM月dd日')}}</span>
                <img class="type2_bottom_img_class" src="../assets/ic_comment.png">
                <span class="type2_count_span_class">{{newsdetail.commentCount}}</span>
            </div>
            <reply_view v-if="newsdetail.replyBeans" v-bind:items="newsdetail.replyBeans"></reply_view>
        </div>
        <div v-else-if="newsType === 3" style="margin-top: 40px;">
            <div class="type3_top_class">
                <md-avatar>
                  <img v-if="newsdetail.imageUrl" v-lazy="newsdetail.imageUrl" class="type3_top_img_class">
                  <img v-else src="../assets/widget_default_face.png" class="type3_top_img_class">
                </md-avatar>
                <div class="type3_top_middle_class">
                    <span class="type3_top_span_class">{{newsdetail.title}}</span>
                    <span class="type3_top_span_time_class">{{new Date(newsdetail.pubDate) | dateFromat('yyyy年MM月dd日')}}</span>
                </div>
                <div class="type3_top_right_div_class">
                    <mt-button type="primary" class="type3_top_btn_class" style="background-color: #24cf5f; width: 60px; height: 20px; font-size: 10px; align-items: center">{{newsdetail.isWatched === 1 ? '关注' : '已关注'}}</mt-button>
                </div>
            </div>
            <div class="type3_icon_class">
                <img v-if="isToday(newsdetail.pubDate)" src="../assets/ic_label_today.png" class="type3_top_img_class">
                <img class="type3_icon_img_clas" src="../assets/ic_label_originate.png">
                <img class="type3_icon_img_clas" src="../assets/ic_label_recommend.png">
            </div>
            <span class="type3_blog_title_span_class">{{newsdetail.blogTitle}}</span>
            <div class="type3_blog_body_class" v-html="newsdetail.body"></div>
        </div>
        <div v-else-if="newsType === 7" style="margin-top: 40px;">
            <span class="title_class">{{newsdetail.title}}</span><br/>
            <span class="author_class">@{{newsdetail.author}}&nbsp;&nbsp;&nbsp;&nbsp;发布于{{new Date(newsdetail.pubDate) | dateFromat('yyyy年MM月dd日')}}</span>
            <div class="type7_body_div_class" v-html="newsdetail.body"></div>
        </div>
        <div v-if="newsType === 0" style="margin-top: 40px;">
            <div v-html="newsdetail.body" style="padding: 10px"></div>
        </div>
        <div v-if="newsType === 3 || newsType === 4 || newsType === 7" class="bottom_div" v-on:click="showPoup">
                <div class="pub_commnet_div">
                    <img class="fav_img" src="../assets/ic_comment_40.png">
                    <span class="pub_comment_span">发表评论</span>
                </div>
                <img v-if="newsdetail.favorite === 1" class="fav_img_class" src="../assets/ic_faved_normal.png">
                <img v-if="newsdetail.favorite === 0" class="fav_img_class" src="../assets/ic_fav_normal.png">
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
import { Popup, Toast, Indicator,MessageBox,Header,Lazyload, Button } from 'mint-ui'
import * as StringUtils from '../utils/string-utils'
import * as DateUtils from '../utils/date-utils'
import reply_view from './comment/reply_view'
export default {
    name: "newsdetail",
    components: { reply_view },
    data() {
        return {
            newsdetail:{},
            popupVisible: false,
            introduction: '',
            isDisabled: true,
            newsType: ''
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
        '$route.params': function (val, oldVal) {
            if(val){
                if(typeof(val.newsId) !== "undefined" && typeof(val.newsType) !== "undefined" && typeof(oldVal.newsId) === "undefined"){//typeof(oldVal.newsId) === "undefined"从评论列表返回到详情页时不需要重新加载数据
                    this.newsType = val.newsType
                    this.getNewsDetail(val.newsId, val.newsType)
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
        let newsId = vue.$route.params.newsId
        let newsType = vue.$route.params.newsType
        this.newsType = newsType
        this.getNewsDetail(newsId, newsType)
    },
    methods: {
        ...mapActions([
            'getNewsDetailContent',
            'pubCommnet'
        ]),
        getNewsDetail(newsId, newsType){
            this.getNewsDetailContent({newsId, newsType});
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
        },
        isToday(time) {
            return DateUtils.isSameDay(time);
        },
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


    /*
      type=0 begin
    */
    .type0_top_class{
        display: flex;
        padding: 10px;
        flex-direction: row;
        width: 100%;
        height: 50px;
        align-items: center;
    }

    .logo_img_class{
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }

    .type0_title_class{
        font-size: 12px;
        color: #111111;
        margin-left: 10px;
        font-weight: bold;
    }

    .type0_diver_class{
        background-color: #c8c7cc;
        width: 100%;
        height: 1px;
    }

    .type0_body_class{
        padding: 10px;
    }

    .type0_bottom_class{
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        border-top-width: 0.5px;
        border-top-color: #c8c7cc;
        border-top-style: solid;
        position: fixed;
        bottom: 0px;
        z-index: 200;
        background-color: white;
        align-items: center;
    }

    .type0_bottom_item_class{
        height: 40px;
        flex: 1;
        align-items: center;
        justify-content: center;
        width: 50px;
        display: flex;
        flex-direction: row;
    }

    .item_img_class{
        width: 20px;
        height: 20px;
    }

    .item_span_class{
        color: #9d9d9d;
        font-size: 10px;
        margin-left: 10px;
    }

    .type0_bottom_item_class:active{
        background-color: silver;
    }

    .type0_about_class{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50px;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
    }

    .about_item_div_class{
        display: flex;
        flex: 1;
        flex-direction: row;
        border-top-color: #d6d6d6;
        border-top-style: solid;
        border-top-width: 0.5px;
        border-right-color: #d6d6d6;
        border-right-width: 0.5px;
        border-right-style: solid;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #d6d6d6;
        margin-top: 10px;
        border-left-color: #d6d6d6;
        border-left-width: 0.5px;
        border-left-style: solid;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        height: 50px;
        background-color: white;
    }

    .about_item_div_class:active{
        background-color: #eeeeee;
    }

    .about_span_class{
        font-size: 13px;
        font-weight: bold;
        color: #111111;
        margin-left: 10px;
    }

    .about_img_class{
        width: 15px;
        height: 15px;
    }
    /*
      type=0 end
    */

    /*
      type=3 begin
    */
    .type3_top_class{
        width: 100%;
        height: 60px;
        padding: 10px;
        background-color: #fcfcfc;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #c8c7cc;
        display: flex;
        flex-direction: row;
    }

    .type3_top_img_class{
        width: 20px;
        height: 20px;
        margin-left: 5px;
    }

    .type3_top_middle_class{
        display: flex;
        flex-direction: column;
        flex: 3;
        margin-left: 10px;
    }

    .type3_top_span_class{
        font-size: 10px;
        color: #111111;
    }

    .type3_top_span_time_class{
        font-size: 10px;
        color: #6a6a6a;
    }

    .type3_top_right_div_class{
        flex: 1;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .type3_icon_class{
        display: flex;
        height: 20px;
        flex-direction: row;
        align-items: center;
    }

    .type3_icon_img_clas{
        width: 20px;
        height: 10px;
        margin-left: 10px;
    }

    .type3_blog_title_span_class{
        font-weight: bold;
        font-size: 15px;
        color: #111111;
        margin-left: 10px;
        margin-top: 10px;
    }

    .type3_blog_body_class{
        padding: 10px;
    }

    /*
      type=3 end
    */

    /*
      type=2 begin
    */
    .type2_title_class{
        font-size: 14px;
        font-weight: bold;
        color: #111111;
        padding: 10px;
        margin-top: 10px;
    }

    .type2_tag_div_class{
        display: flex;
        flex-direction: row;
        padding: 10px;
    }

    .type2_tag_span_class{
        font-size: 8px;
        color: #9d9d9d;
        background-color: #f6f6f6;
        margin-left: 10px;
        border-top-color: #f6f6f6;
        border-top-style: solid;
        border-top-width: 0.5px;
        border-right-color: #f6f6f6;
        border-right-width: 0.5px;
        border-right-style: solid;
        border-bottom-style: solid;
        border-bottom-width: 0.5px;
        border-bottom-color: #f6f6f6;
        border-left-color: #f6f6f6;
        border-left-width: 0.5px;
        border-left-style: solid;
    }

    .type2_body_div{
        padding: 10px;
    }

    .type2_bottom_div_class{
        display: flex;
        flex-direction: row;
        height: 30px;
        align-items: center;
        padding: 10px;
    }

    .type2_author_span_class{
        color: #9d9d9d;
        font-size: 8px;
        flex: 8;
    }

    .type2_count_span_class{
        color: #9d9d9d;
        font-size: 8px;
    }

    .type2_bottom_img_class{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    /*
      type=2 end
    */

    /*
       type=2 begin
    */
    .type7_body_div_class{
        padding: 10px;
        padding-bottom: 40px;
    }
    /*
      type=2 end
    */
</style>