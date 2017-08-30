<template lang="html">
    <div class="content" v-on:click="goDetailContent">
        <div class="content_title_div">
            <img v-if="isSameDay(x.pubDate)" class="class_today" src="../../../assets/ic_label_today.png">
            <span class="content_title">{{x.title}}</span>
        </div>
        <div class="content_bottom">
            <span class="pubtime">@{{x.author}} {{formatTime(x.pubDate)}} type={{x.type}}</span>
            <div class="bottom_right_div">
                <img class="coment_image" src="../../../assets/ic_comment.png">
                <span class="coment_num">{{formatNum(x.commentCount)}}</span>
            </div>
        </div>
    </div>
</template>
 
<script>
import * as DateUtils from '../../../utils/date-utils'
import * as StringUtils from '../../../utils/string-utils'
export default {
    name: "pixel-content",
    props: [
        'x'
    ],
    data() {
        return {
        };
    },
    methods: {
        goDetailContent() {
            this.$router.push({name : 'newsdetail', params: {newsId: this.x.id, newsType: this.x.type}})
        },
        formatTime(time) {
            return DateUtils.format(time);
        },
        formatContent(content) {
            return StringUtils.formatContent(content)
        },
        formatNum(num) {
            return StringUtils.formatNum(num)
        },
        isSameDay(time){
            return DateUtils.isSameDay(time);
        }
    }
}
</script>
 
<style lang="css">

    .content{
        width: 100%;
        height: 121px;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    }

    .content_title_div{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .class_today{
        width: 20px;
        height: 20px;
    }

    .content_title{
        margin-left: 5px;
        width: 100%;
        color: #111111;
        font-size: 20px;
        font-weight: bold;
    }

    .content_bottom{
        width: 100%;
        height: 49px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }

    .pubtime{
        font-size: 10px;
        position: absolute;
        left: 15px;
        bottom: auto;
        color: #9d9d9d;
    }

    .bottom_right_div{
        width: 200px;
        height: 20px;
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 5px;
        justify-content: flex-end;
    }

    .coment_image{
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .coment_num{
        width: 20px;
        height: 20px;
        color: #9d9d9d;
        font-size: 10px;
    }



</style>