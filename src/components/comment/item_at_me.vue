<template>
    <div class="item_tweet_mine_div_class">
        <div class="item_tweet_mine_top_div_class">
            <md-avatar style="flex: 1;margin: 0px">
                <img class="item_tweet_mine_portrait_img_class" :src="item.portrait">
            </md-avatar>
            <div class="item_tweet_mine_right_div_class">
                <span class="item_tweet_mine_uname_span_class">{{item.author}}</span>
                <span class="item_title_span_class">{{item.message}}</span>
                <span class="item_title_span_class">{{item.catalog === 3 ? item.objectBody : (item.objectTitle ? item.objectTitle : '')}}</span>
                <div class="item_tweet_mine_bottom_div_class">
                    <span class="item_tweet_mine_device_type_span_class">{{ item.pubDate | timeAgo }}  {{ item.appClient | getDeviceNameByType}}</span>
                    <div class="item_tweet_mine_bottom_right_item_div_class">
                        <img class="item_tweet_mine_bottom_right_item_img_class" src="../../assets/ic_comment_30.png">
                        <span class="item_tweet_mine_bottom_right_item_count_class">{{item.commentCount === 0 ? '评论' : item.commentCount}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="item_tweet_mine_split_div_class"></div>
    </div>
</template>

<style scoped>

    .item_tweet_mine_div_class {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: white;
    }

    item_tweet_mine_div_class:active{
        background-color: #ebebeb;
    }

    .item_tweet_mine_top_div_class {
        display: flex;
        flex-direction: row;
        flex: 9;
    }

    .item_tweet_mine_portrait_img_class {
        width: 40px;
        height: 40px;
    }

    .item_tweet_mine_right_div_class {
        display: flex;
        flex-direction: column;
        flex: 8;
        margin-left: 5px;
    }

    .item_tweet_mine_uname_span_class {
        color: #111111;
        font-size: 15px;
    }

    .item_tweet_mine_split_div_class {
        background-color: #c8c7cc;
        height: 1px;
        margin-top: 10px;
    }

    .item_tweet_mine_bottom_div_class {
        display: flex;
        flex-direction: row;
        height: 20px;
        margin-top: 10px;
    }

    .item_tweet_mine_device_type_span_class {
        color: #9d9d9d;
        font-size: 11px;
        flex: 6;
    }

    .item_tweet_mine_bottom_right_item_div_class {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex: 5;
        align-items: center;
    }

    .item_tweet_mine_bottom_right_item_img_class {
        width: 15px;
        height: 15px;
    }

    .item_tweet_mine_bottom_right_item_count_class {
        color: #9d9d9d;
        font-size: 10px;
        margin-left: 5px;
    }

    .item_title_span_class{
        background-color: #F6F6F6;
        padding: 5px;
        color: #333333;
        font-size: 13px;
    }
</style>

<script type="text/ecmascript-6">
    import {Lazyload} from 'mint-ui'
    export default {
        name: "item_at_me",
        props: {
            item: {
                type: Object,
                required: true
            }
        },
    }
</script>
