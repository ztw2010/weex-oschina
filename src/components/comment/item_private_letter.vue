<template>
    <div>
        <div class="item_div_class">
            <md-avatar style="flex: 1;margin: 0px" v-if="item.portrait">
                <img class="item_tweet_mine_portrait_img_class" :src="item.portrait">
            </md-avatar>
            <md-avatar style="flex: 1;margin: 0px;background-color: #E67D21;display: flex;justify-content: center;align-items: center" v-if="!item.portrait">
                <span class="item_none_portrait_span_class">{{advar}}</span>
            </md-avatar>
            <div class="item_right_div_class">
                <div class="item_right_top_div_class">
                    <span class="item_uname_span_class">{{item.friendname}}</span>
                    <span class="item_time_span_class">{{ item.pubDate | timeAgo }}</span>
                </div>
                <div class="item_bottom_div_class">
                    <span class="item_content_span_class" v-html="item.content"></span>
                </div>
            </div>
        </div>
        <div class="item_tweet_mine_split_div_class"></div>
    </div>
</template>

<style scoped>
    .item_div_class {
        background-color: white;
        display: flex;
        flex-direction: row;
        padding: 10px;
    }

    .item_right_div_class {
        display: flex;
        flex-direction: column;
        flex: 8;
    }

    .item_right_top_div_class {
        display: flex;
        flex-direction: row;
        height: 30px;
        justify-content: space-between;
        margin-left: 5px;
    }

    .item_uname_span_class {
        color: #111111;
        font-size: 15px;
        line-height: 30px;
        text-align: center;
    }

    .item_time_span_class {
        color: #9d9d9d;
        font-size: 12px;
    }

    .item_bottom_div_class{
        display: flex;
        flex-direction: row;
    }

    .item_content_span_class {
        flex: 8;
        padding: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        line-height: 30px;
        text-align: left;
    }

    .item_tweet_mine_split_div_class {
        background-color: #c8c7cc;
        height: 1px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .item_none_portrait_span_class{
        color: white;
        font-size: 16px;
    }
</style>

<script type="text/ecmascript-6">
    export default {
        name: 'item_private_letter',
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        computed: {
            advar: function(){
                return this.item.friendname.substring(0, 1)
            }
        },
    }
</script>
